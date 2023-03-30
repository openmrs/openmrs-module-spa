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
import org.apache.commons.lang.StringUtils;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.openmrs.User;
import org.openmrs.api.context.Context;
import org.openmrs.module.ModuleException;
import org.openmrs.module.spa.component.ResourceLoaderComponent;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.OpenmrsUtil;
import org.springframework.core.io.Resource;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Base64;

@Slf4j
public class SpaServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final String BASE_URL = "/spa/spaServlet";

    private static  final String JSON_CONFIG_FILE_NAME = "config.json";

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
            handleRemoteAssets(request, response);
        } else {
            handleLocalAssets(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String requestURI = request.getRequestURI();
        if (requestURI.endsWith("/config.json")) {
            if (!Context.isAuthenticated()) {
                String basicAuth = request.getHeader("Authorization");
                if (basicAuth != null) {
                    // check that header is in format "Basic ${base64encode(username + ":" + password)}"
                    if (isValidAuthFormat(response, basicAuth)) return;
                }
            }

            User user = Context.getAuthenticatedUser();
            if (user != null && user.isSuperUser()) {
                saveJsonConfigFile(request, response);
            } else {
                log.error("Authorisation error while creating a config.json file");
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            }
        }
    }

    private void saveJsonConfigFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        File jsonConfigFile = getJsonConfigFile();
        try {
            BufferedReader reader = request.getReader();
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line);
            }
            String requestBody = stringBuilder.toString();

            new ObjectMapper().readTree(requestBody); // verify that is in a valid JSON format

            InputStream inputStream = new ByteArrayInputStream(requestBody.getBytes(StandardCharsets.UTF_8));
            OutputStream outStream = Files.newOutputStream(jsonConfigFile.toPath());
            OpenmrsUtil.copyFile(inputStream, outStream);

            if (jsonConfigFile.exists()) {
                log.debug("file: '{}' written successfully", jsonConfigFile.getAbsolutePath());
                response.setStatus(HttpServletResponse.SC_OK);
            }
        } catch (JsonProcessingException e) {
            log.error("Invalid JSON format", e);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    private boolean isValidAuthFormat(HttpServletResponse response, String basicAuth) {
        if (basicAuth.startsWith("Basic")) {
            try {
                // remove the leading "Basic "
                basicAuth = basicAuth.substring(6);
                if (StringUtils.isBlank(basicAuth)) {
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid credentials provided");
                    return true;
                }

                String decoded = new String(Base64.getDecoder().decode(basicAuth), StandardCharsets.UTF_8);
                if (StringUtils.isBlank(decoded) || !decoded.contains(":")) {
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid credentials provided");
                    return true;
                }

                String[] userAndPass = decoded.split(":");
                Context.authenticate(userAndPass[0], userAndPass[1]);
                log.debug("authenticated [{}]", userAndPass[0]);
            }
            catch (Exception ex) {
                // This filter never stops execution. If the user failed to
                // authenticate, that will be caught later.
                log.debug("authentication exception ", ex);
            }
        }
        return false;
    }

    protected void handleLocalAssets(HttpServletRequest request, HttpServletResponse response) throws IOException {
        File file = getFile(request);

        if (file == null || !file.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        if (file.getAbsolutePath().endsWith("/config.json")) {
            response.setContentType("application/json;charset=UTF-8");
        }
        response.setDateHeader("Last-Modified", file.lastModified());
        addCacheControlHeader(request, response);
        response.setContentLength((int) file.length());
        String mimeType = getServletContext().getMimeType(file.getName());
        response.setContentType(mimeType);

        try (InputStream is = Files.newInputStream(file.toPath())) {
            OpenmrsUtil.copyFile(is, response.getOutputStream());
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
    protected void handleRemoteAssets(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Resource resource = getResource(request);
        if (!resource.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        if (resource.getFilename().endsWith("/config.json")) {
            response.setContentType("application/json;charset=UTF-8");
        }
        response.setDateHeader("Last-Modified", resource.lastModified());
        addCacheControlHeader(request, response);
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
        if (path == null) { //dynamically defined servlets see https://wiki.openmrs.org/display/docs/Module+Servlets
            String url = String.valueOf(request.getRequestURL());
            path = url.substring(url.lastIndexOf('/') + 1);
        }
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

        String extractedFile = "";
        if (path == null) { //dynamically defined servlets see https://wiki.openmrs.org/display/docs/Module+Servlets
            String url = String.valueOf(request.getRequestURL());
            extractedFile = url.substring(url.lastIndexOf('/') + 1);
        } else {
            // we want to extract everything after /spa/spaResources/ from the path info. This should cater for sub-directories
            extractedFile = path.substring(path.indexOf('/', BASE_URL.length() - 1) + 1);
        }
        File folder = SpaModuleUtils.getSpaStaticFilesDir();

        //Resolve default index.html
        if (extractedFile.endsWith("index.htm") || !extractedFile.contains(".")) {
            extractedFile = "index.html";
        }

        File file = folder.toPath().resolve(extractedFile).toFile();
        if (!file.exists()) {
            log.warn("File with path '{}' doesn't exist", file.toString());
            return null;
        }
        return file;
    }

    private void addCacheControlHeader(HttpServletRequest request, HttpServletResponse response) {
        String path = request.getPathInfo();
        if (path != null && (path.endsWith("importmap.json") || path.endsWith("import-map.json"))) {
            response.setHeader("Cache-Control", "public, must-revalidate, max-age=0;");
        }
    }

    private File getJsonConfigFile() {
        File folder = SpaModuleUtils.getSpaStaticFilesDir();
        if (!folder.isDirectory()) {
            throw new ModuleException("SPA frontend repository is not a directory at: " + folder.getAbsolutePath());
        }
        return  new File(folder.getAbsolutePath(), JSON_CONFIG_FILE_NAME);
    }

}
