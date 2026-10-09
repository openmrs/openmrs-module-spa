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
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.springframework.http.HttpHeaders;
import org.springframework.mock.web.MockFilterChain;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.StreamUtils;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.zip.GZIPInputStream;

import static java.util.Collections.singletonList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class SpaCompressionFilterTest {
	
	@TempDir
	static Path spaDirectory;
	
	/**
	 * The filters in the order {@code config.xml} applies them, ending with the response being closed
	 * as it is when {@link SpaFilter}'s forward returns.
	 */
	static MockMvc mockMvc;
	
	@BeforeAll
	static void setup() throws Exception {
		Files.write(spaDirectory.resolve("main.js"), "plain".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("main.js.br"), "brotlied".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("bare.js"), "plain".getBytes(StandardCharsets.UTF_8));
		
		mockMvc = MockMvcBuilders.standaloneSetup(new SpaController(new SpaResourceLoader(spaDirectory::toString)))
		        .setMessageConverters(new SpaResourceConverter())
		        .addFilters(new ShallowEtagHeaderFilter(), new SpaCompressionFilter(), new CloseAfterForwardFilter())
		        .build();
	}
	
	@Test
	void shouldNotGzipAPrecompressedFile() throws Exception {
		mockMvc.perform(get("/spa/main.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br")).andExpect(result -> {
			assertThat(result.getResponse().getHeaders(HttpHeaders.CONTENT_ENCODING), is(singletonList("br")));
			assertThat(result.getResponse().getContentAsString(), is("brotlied"));
		});
	}
	
	@Test
	void shouldGzipAFileWithNoPrecompressedVersion() throws Exception {
		mockMvc.perform(get("/spa/bare.js").header(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br")).andExpect(result -> {
			assertThat(result.getResponse().getHeaders(HttpHeaders.CONTENT_ENCODING), is(singletonList("gzip")));
			assertThat(gunzip(result.getResponse().getContentAsByteArray()), is("plain"));
		});
	}
	
	@ParameterizedTest
	@EnumSource(BodyWriter.class)
	void shouldPassThroughABodyThatIsAlreadyEncoded(BodyWriter bodyWriter) throws Exception {
		MockHttpServletResponse response = filter(bodyWriter, "br");
		
		assertThat(response.getHeaders(HttpHeaders.CONTENT_ENCODING), is(singletonList("br")));
		assertThat(response.getContentAsString(), is("body"));
	}
	
	@ParameterizedTest
	@EnumSource(BodyWriter.class)
	void shouldGzipABodyThatIsNotEncoded(BodyWriter bodyWriter) throws Exception {
		MockHttpServletResponse response = filter(bodyWriter, null);
		
		assertThat(response.getHeaders(HttpHeaders.CONTENT_ENCODING), is(singletonList("gzip")));
		assertThat(gunzip(response.getContentAsByteArray()), is("body"));
	}
	
	/**
	 * Runs a request through the filter to a servlet that writes "body" using the given
	 * {@link BodyWriter}, optionally setting a Content-Encoding first.
	 */
	private static MockHttpServletResponse filter(BodyWriter bodyWriter, String contentEncoding) throws Exception {
		MockHttpServletRequest request = new MockHttpServletRequest("GET", "/spa/main.js");
		request.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br");
		MockHttpServletResponse response = new MockHttpServletResponse();
		
		HttpServlet servlet = new HttpServlet() {
			
			@Override
			protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
				resp.setCharacterEncoding(StandardCharsets.UTF_8.name());
				if (contentEncoding != null) {
					resp.setHeader(HttpHeaders.CONTENT_ENCODING, contentEncoding);
				}
				
				bodyWriter.write(resp, "body");
			}
		};
		
		new SpaCompressionFilter().doFilter(request, response, new MockFilterChain(servlet, new CloseAfterForwardFilter()));
		return response;
	}
	
	private static String gunzip(byte[] bytes) throws IOException {
		try (GZIPInputStream in = new GZIPInputStream(new ByteArrayInputStream(bytes))) {
			return new String(StreamUtils.copyToByteArray(in), StandardCharsets.UTF_8);
		}
	}
	
	enum BodyWriter {
		
		OUTPUT_STREAM {
			
			@Override
			void write(HttpServletResponse response, String body) throws IOException {
				response.getOutputStream().write(body.getBytes(StandardCharsets.UTF_8));
			}
		},
		WRITER {
			
			@Override
			void write(HttpServletResponse response, String body) throws IOException {
				response.getWriter().write(body);
			}
		};
		
		abstract void write(HttpServletResponse response, String body) throws IOException;
	}
	
	/**
	 * Closes the response the way Tomcat's {@code ApplicationDispatcher} does once a forward returns:
	 * via {@code getWriter()} first, falling back to {@code getOutputStream()} if the body was written
	 * with the stream. {@link SpaCompressionFilter} relies on this to finish its gzip stream.
	 */
	static class CloseAfterForwardFilter implements Filter {
		
		@Override
		public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
		        throws IOException, ServletException {
			chain.doFilter(request, response);
			
			try {
				PrintWriter writer = response.getWriter();
				writer.close();
			}
			catch (IllegalStateException e) {
				response.getOutputStream().close();
			}
		}
	}
}
