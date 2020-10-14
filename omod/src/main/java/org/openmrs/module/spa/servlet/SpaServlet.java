/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 * <p>
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.servlet;

import org.openmrs.api.context.Context;
import org.openmrs.module.spa.component.ResourceLoaderComponent;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.OpenmrsUtil;
import org.springframework.core.io.Resource;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class SpaServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final String BASE_URL = "/spa/spaServlet";

    /**
     * Used for caching purposes
     *
     * @see HttpServlet#getLastModified(HttpServletRequest)
     */
    @Override
    protected long getLastModified(HttpServletRequest req) {
        File f = null;
        try {
            f = getResource(req).getFile();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (f == null) {
            return super.getLastModified(req);
        }

        return f.lastModified();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Resource resource = getResource(request);
        if (!resource.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        response.setDateHeader("Last-Modified", resource.lastModified());
        response.setContentLength(Long.valueOf(resource.contentLength()).intValue());
        String mimeType = getServletContext().getMimeType(resource.getFilename());
        response.setContentType(mimeType);

        InputStream is = resource.getInputStream();
        try {
            OpenmrsUtil.copyFile(is, response.getOutputStream());
        } finally {
            OpenmrsUtil.closeStream(is);
        }
    }

    /**
     * Turns the given request/path into a File object
     *
     * @param request the current http request
     * @return the file being requested or null if not found
     */
    protected Resource getResource(HttpServletRequest request) {
        String path = request.getPathInfo();
        /*
         * we want to extract everything after /spa/spaServlet from the path info.
         * This should cater for sub-directories
         */
        String resourceName = path.substring(path.indexOf('/', BASE_URL.length() - 1) + 1);

        String frontedDirectoryPath = SpaModuleUtils.getFrontendDirectoryPath();
        if (resourceName.equals("index.htm") || resourceName.isEmpty() || !resourceName.contains(".")) {
            resourceName = "index.html";
        }

        String extractedResourcePath = frontedDirectoryPath + resourceName;
        ResourceLoaderComponent resourceLoaderComponent = Context
                .getRegisteredComponent("spaResourceLoader", ResourceLoaderComponent.class);

        if (extractedResourcePath.contains("http")) {
            extractedResourcePath = "url:" + extractedResourcePath;
        }
        return resourceLoaderComponent.getResource(extractedResourcePath);
    }
}
