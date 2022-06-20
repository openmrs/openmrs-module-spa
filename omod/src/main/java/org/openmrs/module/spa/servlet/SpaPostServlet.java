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

import lombok.extern.slf4j.Slf4j;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.PrivilegeConstants;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.stream.Collectors;

@Slf4j
public class SpaPostServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final String BASE_URL = "/spa/spaPostServlet";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        if (Context.hasPrivilege(PrivilegeConstants.VIEW_ADMIN_FUNCTIONS)) {
            writeFile(request, response);
        } else {
            response.sendError(403, "");
        }
    }

    protected File writeFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String path = request.getPathInfo();

        // we want to extract everything after /ws/spa/ from the path info. This should cater for sub-directories
        String extractedFile = path.substring(path.indexOf("/ws/spa/", BASE_URL.length() - 1) + 1);
        File folder = SpaModuleUtils.getSpaStaticFilesDir();

        File file = folder.toPath().resolve(extractedFile).toFile();

        try (FileWriter writer = new FileWriter(file)){
            writer.write(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())));
        } catch (IOException e) {
            e.printStackTrace();
            response.sendError(400, e.getLocalizedMessage());
        }
        return file;
    }

}
