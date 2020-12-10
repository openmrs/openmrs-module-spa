/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.utils;

import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.SpaConstants;
import org.openmrs.util.OpenmrsUtil;

import java.io.File;

public class SpaModuleUtils {

    public static final String DEFAULT_FRONTEND_DIRECTORY = "frontend";

    public static final String GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR = "spa.frontend.directory";

    public static final String GLOBAL_PROPERTY_FRONTEND_RESOURCE_BASE_URL = "spa.frontend.resourceBaseUrl";

    public static final String DEFAULT_FRONTEND_RESOURCE_BASE_URL = "/frontend";

    /**
     * Reads the value of GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR
     * from GP.
     * Should return null if the path specified does not point
     * to valid file or directory
     * @return directory for the path specified in the GP
     */
    public static File getSpaStaticFilesDir () {
        AdministrationService as = Context.getAdministrationService();
        String folderName = as.getGlobalProperty(SpaModuleUtils.GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR,
                SpaModuleUtils.DEFAULT_FRONTEND_DIRECTORY);

        // try to load the repository folder straight away.
        File folder = new File(folderName);

        // if the property wasn't a full path already, assume it was intended to be a folder in the
        // application directory
        if (!folder.exists()) {
            folder = new File(OpenmrsUtil.getApplicationDataDirectory(), folderName);
        }
        return folder;
    }

    /*
     * This should take care for File system, Class path, and URL path
     */
    public static String getFrontendDirectoryPath() {
        AdministrationService administrationService = Context.getAdministrationService();
        String path = administrationService.getGlobalProperty(SpaConstants.FRONTEND_DIRECTORY_PATH, "/frontend");

        if (!path.endsWith("/")) {
            path = path + "/";
        }

        return path;
    }
}
