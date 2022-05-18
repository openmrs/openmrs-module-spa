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

import org.junit.Before;
import org.junit.Test;
import org.openmrs.test.BaseModuleContextSensitiveTest;
import org.springframework.core.io.Resource;
import org.springframework.test.context.ContextConfiguration;

import javax.servlet.http.HttpServletRequest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ContextConfiguration(locations = {"classpath:applicationContext-service.xml",
        "classpath:webModuleApplicationContext.xml"}, inheritLocations = false)
public class SpaServletTest extends BaseModuleContextSensitiveTest {

    //Just a placeholder url for testing, we don't make an actual request
    private static final String DEFAULT_REMOTE_URL = "https://dev3.openmrs.org/openmrs/spa/@openmrs/esm-app-shell/latest/";
    private static final String PREFIX_REMOTE_URL = "url:" + DEFAULT_REMOTE_URL;

    private static final String INDEX_HTML = "index.html";

    private SpaServlet servlet;

    @Before
    public void setup() {
        servlet = new SpaServlet();
    }

    @Test
    public void shouldReturnDefaultResourcePath() {
        String path = "";

        String resultPath = servlet.constructRemoteUrl(path);
        assertNotNull(resultPath);
        assertEquals(resultPath, PREFIX_REMOTE_URL + "index.html");
    }

    @Test
    public void shouldExtractValidResourcePath() {
        String path = "manifest-build.html";

        String resultPath = servlet.constructRemoteUrl(path);
        assertNotNull(resultPath);
        assertTrue(resultPath.startsWith("url:"));
        assertEquals(resultPath, PREFIX_REMOTE_URL + path);
    }

    @Test
    public void shouldReturnValidResource() {
        SpaServlet spaServlet = mock(SpaServlet.class);
        Resource resourceMock = mock(Resource.class);
        HttpServletRequest requestMock = mock(HttpServletRequest.class);

        when(requestMock.getPathInfo()).thenReturn(INDEX_HTML);
        when(resourceMock.exists()).thenReturn(true);
        when(spaServlet.getResource(requestMock)).thenReturn(resourceMock);

        Resource resource = spaServlet.getResource(requestMock);
        assertNotNull(resource);
        assertTrue(resource.exists());
    }

    @Test
    public void shouldReturnDefaultIndexHtmlForInvalidResource() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        SpaServlet spaServlet = mock(SpaServlet.class);
        Resource resourceMock = mock(Resource.class);

        when(request.getPathInfo()).thenReturn(INDEX_HTML);
        when(resourceMock.exists()).thenReturn(true);
        when(resourceMock.getFilename()).thenReturn(INDEX_HTML);
        when(spaServlet.getResource(request)).thenReturn(resourceMock);

        Resource resource = spaServlet.getResource(request);
        assertNotNull(resource);
        assertTrue(resource.exists());
        assertEquals(resource.getFilename(), INDEX_HTML);
    }

    @Test
    public void shouldReturnResourceLoaderBean() {
        assertNotNull(servlet.getResourceLoaderBean());
    }
}
