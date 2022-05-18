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
import org.mockito.Mock;
import org.openmrs.test.BaseModuleContextSensitiveTest;
import org.springframework.test.context.ContextConfiguration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@ContextConfiguration(locations = { "classpath:applicationContext-service.xml",
        "classpath:webModuleApplicationContext.xml"}, inheritLocations = false)
public class SpaServletWebTest extends BaseModuleContextSensitiveTest {

    private static final String INDEX_HTML = "index.html";

    private SpaServlet spaServlet;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Before
    public void setup() {
        spaServlet = new SpaServlet();
    }

    @Test
    public void shouldReturnLastModifiedFile () {
        HttpServletRequest httpServletRequestMock = mock(HttpServletRequest.class);

        when(httpServletRequestMock.getPathInfo()).thenReturn(INDEX_HTML);

       Long result = spaServlet.getLastModified(httpServletRequestMock);

       assertNotNull(result);
       assertEquals(result.longValue(), -1);
    }

    @Test
    public void doGet_shouldReturnRequestResource () throws IOException, ServletException {
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);

        when(request.getPathInfo()).thenReturn(INDEX_HTML);
        when(response.getWriter()).thenReturn(printWriter);

        spaServlet.doGet(request, response);

        verify(request).getPathInfo();
    }
}
