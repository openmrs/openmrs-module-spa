/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.servlet;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.test.BaseModuleContextSensitiveTest;
import org.springframework.core.io.Resource;
import org.springframework.test.context.ContextConfiguration;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ContextConfiguration(locations = { "classpath:applicationContext-service.xml",
        "classpath:webModuleApplicationContext.xml"}, inheritLocations = false)
public class SpaServletTest extends BaseModuleContextSensitiveTest {

    private static final String DEFAULT_REMOTE_URL = "https://spa-modules.nyc3.digitaloceanspaces.com/@openmrs/esm-app-shell/latest/";
    private static final String PREFIX_REMOTE_URL = "url:" + DEFAULT_REMOTE_URL;

    private SpaServlet servlet;

    @Before
    public void setup() {
        servlet = new SpaServlet();
    }

    @Test
    public void shouldReturnDefaultResourcePath() {
        String path = "";

        String resultPath = servlet.constructRemoteUrl(path);
        Assert.assertNotNull(resultPath);
        Assert.assertEquals(resultPath, PREFIX_REMOTE_URL +"index.html");
    }

    @Test
    public void shouldExtractValidResourcePath() {
        String path = "openmrs_initialize.html";

        String resultPath = servlet.constructRemoteUrl(path);
        Assert.assertNotNull(resultPath);
        Assert.assertTrue(resultPath.startsWith("url:"));
        Assert.assertEquals(resultPath, PREFIX_REMOTE_URL +"openmrs_initialize.html");
    }

    @Test
    public void shouldReturnValidResource() throws IOException {
        HttpServletRequest request = mock(HttpServletRequest.class);
        when(request.getPathInfo()).thenReturn("index.html");

        Resource resource = servlet.getResource(request);
        Assert.assertNotNull(resource);
        Assert.assertTrue(resource.exists());
        Assert.assertNotNull(resource.getInputStream());
    }

    @Test
    public void shouldReturnDefaultIndexHtmlForInvalidResource() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        when(request.getPathInfo()).thenReturn("/index.htm");

        Resource resource = servlet.getResource(request);
        Assert.assertNotNull(resource);
        Assert.assertTrue(resource.exists());
        Assert.assertEquals(resource.getFilename(), "index.html");
    }

    @Test
    public void shouldReturnResourceLoaderBean() {
        Assert.assertNotNull(servlet.getResourceLoaderBean());
    }
}
