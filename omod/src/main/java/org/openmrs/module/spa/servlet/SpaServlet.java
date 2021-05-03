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

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.component.ResourceLoaderComponent;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.OpenmrsUtil;
import org.springframework.core.io.Resource;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Slf4j
public class SpaServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final String BASE_URL = "/spa/spaServlet";

    /**
     * Used for caching purposes
     *
     * @see HttpServlet#getLastModified(HttpServletRequest)
     */
    @SneakyThrows
    @Override
    protected long getLastModified(HttpServletRequest servletRequest) {
        if (SpaModuleUtils.isRemoteAssetsEnabled()){
            Resource resource = getResource(servletRequest);
            return resource.lastModified();
        } else {
            File file = getFile(servletRequest);
            if (file == null) {
                return super.getLastModified(servletRequest);
            }
            return file.lastModified();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if (SpaModuleUtils.isRemoteAssetsEnabled()) {
            handleRemoteAssetsDirectory(request, response);
        } else {
            handleApplicationDirectoryAssets(request, response);
        }
    }

    protected void handleApplicationDirectoryAssets(HttpServletRequest request, HttpServletResponse response) throws IOException {
        File file = getFile(request);

        if (file == null || !file.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        response.setDateHeader("Last-Modified", file.lastModified());
        response.setContentLength((int) file.length());
        String mimeType = getServletContext().getMimeType(file.getName());
        response.setContentType(mimeType);

        InputStream is = new FileInputStream(file);
        try {
            OpenmrsUtil.copyFile(is, response.getOutputStream());
        } finally {
            OpenmrsUtil.closeStream(is);
        }
    }

    /**
     * Handles fetching of resources from remotes or those fronted assets which doesn't
     * resides in the filesystem
     *
     * @param request {@link HttpServletRequest}
     * @param response {@link HttpServletResponse}
     * @throws IOException {@link IOException} F
     */
    protected void handleRemoteAssetsDirectory(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Resource resource = getResource(request);
        if (!resource.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        response.setDateHeader("Last-Modified", resource.lastModified());
        response.setContentLength((int) resource.contentLength());
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
        return getResourceLoaderBean().getResource(constructRemoteUrl(path));
    }

    protected String constructRemoteUrl(String path) {
        String resourceName = path.substring(path.indexOf('/', BASE_URL.length() - 1) + 1);

        // Remove the trailing slash
        if (resourceName.length() > 0 && resourceName.charAt(resourceName.length() - 1) == '/') {
            resourceName = resourceName.substring(0, resourceName.length() - 1);
        }

        String frontedAssetsDirectoryPath = SpaModuleUtils.getRemoteAssetsUrl();
        log.info("Serving assets from {}", frontedAssetsDirectoryPath);
        if (resourceName.endsWith("index.htm") || !resourceName.contains(".")) {
            resourceName = "index.html";
        }

        String extractedResourcePath = frontedAssetsDirectoryPath + resourceName;
        if (extractedResourcePath.contains("http") && !extractedResourcePath.contains("url:")) {
            extractedResourcePath = "url:" + extractedResourcePath;
        }
        log.info("Frontend asset {}", extractedResourcePath);
        return extractedResourcePath;
    }

    protected ResourceLoaderComponent getResourceLoaderBean() {
        return Context.getRegisteredComponent("spaResourceLoader", ResourceLoaderComponent.class);
    }

    protected File getFile(HttpServletRequest request) {
        // all url will have a base of /spa/spaResources/
        String path = request.getPathInfo();

        // we want to extract everything after /spa/spaResources/ from the path info. This should cater for sub-directories
        String extractedFile = path.substring(path.indexOf('/', BASE_URL.length() - 1) + 1);
        File folder = SpaModuleUtils.getSpaStaticFilesDir();

        //Resolve default index.html
        if (extractedFile.endsWith("index.htm") || !extractedFile.contains(".")) {
            extractedFile = "index.html";
        }

        String realPath = folder.getPath();
        realPath += "/" + extractedFile;
        realPath = realPath.replace("/", File.separator);

        File file = new File(realPath);
        if (!file.exists()) {
            log.warn("File with path '" + realPath + "' doesn't exists");
            return null;
        }
        return file;
    }

}
