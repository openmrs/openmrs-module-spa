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
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.core.io.Resource;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class SpaResourceLoaderTest {
	
	@TempDir
	static Path parentDirectory;
	
	static SpaResourceLoader resourceLoader;
	
	@BeforeAll
	static void setup() throws Exception {
		Path spaDirectory = Files.createDirectory(parentDirectory.resolve("frontend"));
		Files.createDirectory(spaDirectory.resolve("nested"));
		Files.write(spaDirectory.resolve("main.js"), "main".getBytes(StandardCharsets.UTF_8));
		Files.write(spaDirectory.resolve("nested").resolve("chunk.js"), "chunk".getBytes(StandardCharsets.UTF_8));
		Files.write(parentDirectory.resolve("secret.txt"), "secret".getBytes(StandardCharsets.UTF_8));
		Path sibling = Files.createDirectory(parentDirectory.resolve("frontend-other"));
		Files.write(sibling.resolve("other.js"), "other".getBytes(StandardCharsets.UTF_8));
		
		resourceLoader = new SpaResourceLoader(spaDirectory::toString);
	}
	
	@ParameterizedTest
	@ValueSource(strings = { "/main.js", "//main.js", "/nested/../main.js" })
	void shouldLoadFilesInsideSpaDirectory(String path) throws Exception {
		Resource resource = resourceLoader.getResource(path);
		
		assertThat(resource.exists(), is(true));
		assertThat(new String(Files.readAllBytes(resource.getFile().toPath()), StandardCharsets.UTF_8), is("main"));
	}
	
	@Test
	void shouldLoadFilesInNestedDirectories() {
		assertThat(resourceLoader.getResource("/nested/chunk.js").exists(), is(true));
	}
	
	@ParameterizedTest
	@ValueSource(strings = { "/../secret.txt", "//../secret.txt", "/nested/../../secret.txt",
	        "/../frontend-other/other.js" })
	void shouldNotLoadFilesOutsideSpaDirectory(String path) {
		assertThat(resourceLoader.getResource(path).exists(), is(false));
	}
}
