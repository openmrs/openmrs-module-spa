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

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.openmrs.util.OpenmrsUtil;

import java.nio.file.Path;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.openmrs.module.spa.SpaConstants.DEFAULT_FRONTEND_DIRECTORY;

public class SpaDirectoryResolverTest {
	
	@TempDir
	Path appDataDirectory;
	
	@TempDir
	Path otherDirectory;
	
	@BeforeEach
	void setup() {
		OpenmrsUtil.setApplicationDataDirectory(appDataDirectory.toString());
	}
	
	@AfterEach
	void teardown() {
		OpenmrsUtil.setApplicationDataDirectory(null);
	}
	
	@Test
	void shouldResolveNullToDefaultDirectory() {
		SpaDirectoryResolver.resolveDirectory(null);
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(defaultDirectory()));
	}
	
	@Test
	void shouldResolveRelativePathAgainstApplicationDataDirectory() {
		SpaDirectoryResolver.resolveDirectory("custom/frontend");
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(),
		    is(appDataDirectory.resolve("custom").resolve("frontend").toString()));
	}
	
	@Test
	void shouldNormalizeRelativePathThatStaysInsideApplicationDataDirectory() {
		SpaDirectoryResolver.resolveDirectory("custom/../frontend2");
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(appDataDirectory.resolve("frontend2").toString()));
	}
	
	@Test
	void shouldUseAbsolutePathAsIs() {
		SpaDirectoryResolver.resolveDirectory(otherDirectory.toString());
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(otherDirectory.toString()));
	}
	
	@Test
	void shouldNormalizeAbsolutePath() {
		SpaDirectoryResolver.resolveDirectory(otherDirectory.resolve("a").resolve("..").resolve("b").toString());
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(otherDirectory.resolve("b").toString()));
	}
	
	@Test
	void shouldFallBackToDefaultWhenRelativePathEscapesApplicationDataDirectory() {
		SpaDirectoryResolver.resolveDirectory("../outside");
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(defaultDirectory()));
	}
	
	@Test
	void shouldFallBackToDefaultWhenNestedRelativePathEscapesApplicationDataDirectory() {
		SpaDirectoryResolver.resolveDirectory("frontend/../../outside");
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(defaultDirectory()));
	}
	
	@Test
	void shouldResetToDefaultWhenSettingIsRemoved() {
		SpaDirectoryResolver.resolveDirectory(otherDirectory.toString());
		SpaDirectoryResolver.resolveDirectory(null);
		
		assertThat(SpaDirectoryResolver.getSpaDirectory(), is(defaultDirectory()));
	}
	
	private String defaultDirectory() {
		return appDataDirectory.resolve(DEFAULT_FRONTEND_DIRECTORY).toString();
	}
}
