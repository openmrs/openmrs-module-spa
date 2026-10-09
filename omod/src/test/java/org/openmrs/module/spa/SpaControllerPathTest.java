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
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class SpaControllerPathTest {
	
	@TempDir
	static Path parentDirectory;
	
	static MockMvc mockMvc;
	
	@BeforeAll
	static void setup() throws Exception {
		Path spaDirectory = Files.createDirectory(parentDirectory.resolve("frontend"));
		Files.write(spaDirectory.resolve("my file.js"), "spaced".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("main.js"), "main".getBytes(StandardCharsets.UTF_8));
		Files.write(parentDirectory.resolve("secret.js"), "secret".getBytes(StandardCharsets.UTF_8));
		
		mockMvc = MockMvcBuilders.standaloneSetup(new SpaController(new SpaResourceLoader(spaDirectory::toString)))
		        .setMessageConverters(new SpaResourceConverter()).build();
	}
	
	@Test
	void shouldServeFileWithPercentEncodedName() throws Exception {
		mockMvc.perform(get(URI.create("/spa/my%20file.js"))).andExpect(result -> {
			assertThat(result.getResponse().getStatus(), is(200));
			assertThat(result.getResponse().getContentAsString(), is("spaced"));
		});
	}
	
	@Test
	void shouldServeFileUnderContextPath() throws Exception {
		mockMvc.perform(get("/openmrs/spa/main.js").contextPath("/openmrs")).andExpect(result -> {
			assertThat(result.getResponse().getStatus(), is(200));
			assertThat(result.getResponse().getContentAsString(), is("main"));
		});
	}
	
	@Test
	void shouldNotServeFilesOutsideSpaDirectory() throws Exception {
		mockMvc.perform(get(URI.create("/spa/%2e%2e/secret.js"))).andExpect(result -> {
			assertThat(result.getResponse().getStatus(), is(404));
			assertThat(result.getResponse().getContentAsString(), not("secret"));
		});
	}
	
	@Test
	void shouldNotServeFilesOutsideSpaDirectoryViaWsPrefix() throws Exception {
		mockMvc.perform(get(URI.create("/ws/spa/../../spa/../secret.js"))).andExpect(result -> {
			assertThat(result.getResponse().getContentAsString(), not("secret"));
		});
	}
}
