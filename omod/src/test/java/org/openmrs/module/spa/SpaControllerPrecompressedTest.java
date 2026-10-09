/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class SpaControllerPrecompressedTest {
	
	@TempDir
	static Path spaDirectory;
	
	static MockMvc mockMvc;
	
	@BeforeAll
	static void setup() throws Exception {
		Files.write(spaDirectory.resolve("main.js"), "plain".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("main.js.gz"), "gzipped".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("main.js.br"), "brotlied".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("only-gz.js"), "plain".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("only-gz.js.gz"), "gzipped".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("bare.js"), "plain".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("index.html"), "page".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("index.html.br"), "brotlied page".getBytes(StandardCharsets.UTF_8));
		
		mockMvc = MockMvcBuilders.standaloneSetup(new SpaController(new SpaResourceLoader(spaDirectory::toString)))
		        .setMessageConverters(new SpaResourceConverter()).build();
	}
	
	@Test
	void shouldPreferBrotliWhenBothAreAvailable() throws Exception {
		mockMvc.perform(get("/spa/main.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br")).andExpect(result -> {
			assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is("br"));
			assertThat(result.getResponse().getHeader(HttpHeaders.VARY), containsString(HttpHeaders.ACCEPT_ENCODING));
			assertThat(result.getResponse().getContentType(), containsString("javascript"));
			assertThat(result.getResponse().getContentAsString(), is("brotlied"));
		});
	}
	
	@Test
	void shouldServeGzipWhenBrotliIsNotAccepted() throws Exception {
		mockMvc.perform(get("/spa/main.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate")).andExpect(result -> {
			assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is("gzip"));
			assertThat(result.getResponse().getContentAsString(), is("gzipped"));
		});
	}
	
	@Test
	void shouldServeGzipWhenNoBrotliFileExists() throws Exception {
		mockMvc.perform(get("/spa/only-gz.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br"))
		        .andExpect(result -> {
			        assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is("gzip"));
			        assertThat(result.getResponse().getContentAsString(), is("gzipped"));
		        });
	}
	
	@Test
	void shouldServePlainFileWhenNothingIsAccepted() throws Exception {
		mockMvc.perform(get("/spa/main.js")).andExpect(result -> {
			assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is(nullValue()));
			assertThat(result.getResponse().getHeader(HttpHeaders.VARY), containsString(HttpHeaders.ACCEPT_ENCODING));
			assertThat(result.getResponse().getContentAsString(), is("plain"));
		});
	}
	
	@Test
	void shouldServePlainFileWhenNoPrecompressedFileExists() throws Exception {
		mockMvc.perform(get("/spa/bare.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br")).andExpect(result -> {
			assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is(nullValue()));
			assertThat(result.getResponse().getContentAsString(), is("plain"));
		});
	}
	
	@Test
	void shouldServePrecompressedIndexPage() throws Exception {
		mockMvc.perform(get("/spa/some/route").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br"))
		        .andExpect(result -> {
			        assertThat(result.getResponse().getHeader(HttpHeaders.CONTENT_ENCODING), is("br"));
			        assertThat(result.getResponse().getContentType(), containsString("text/html"));
			        assertThat(result.getResponse().getContentAsString(), is("brotlied page"));
		        });
	}
}
