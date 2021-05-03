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

import lombok.extern.slf4j.Slf4j;
import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.SpaConstants;
import org.openmrs.util.OpenmrsUtil;

import java.io.File;

import static org.openmrs.module.spa.SpaConstants.DEFAULT_FRONTEND_DIRECTORY;
import static org.openmrs.module.spa.SpaConstants.GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR;
import static org.openmrs.module.spa.SpaConstants.GP_IS_REMOTE_ASSETS_ENABLED;

@Slf4j
public class SpaModuleUtils {

    SpaModuleUtils() {}

    /**
     * Reads the value of GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR
     * from GP.
     * Should return null if the path specified does not point
     * to valid file or directory
     * @return directory for the path specified in the GP
     */
    public static File getSpaStaticFilesDir () {
        AdministrationService as = Context.getAdministrationService();
        String folderName = as.getGlobalProperty(GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR,
                DEFAULT_FRONTEND_DIRECTORY);

        // try to load the repository folder straight away.
        File folder = new File(folderName);

        // if the property wasn't a full path already, assume it was intended to be a folder in the
        // application directory
        if (!folder.exists()) {
            folder = new File(OpenmrsUtil.getApplicationDataDirectory(), folderName);
        }
        return folder;
    }

    public static boolean isRemoteAssetsEnabled() {
        AdministrationService administrationService = Context.getAdministrationService();
        String isRemoteAssetEnabled = administrationService.getGlobalProperty(GP_IS_REMOTE_ASSETS_ENABLED, "false");
        log.info("Remote/Local frontend assets enabled {}", isRemoteAssetEnabled);
        return Boolean.parseBoolean(isRemoteAssetEnabled);
    }

    /*
     * This should take care for File system, Class path, and URL path
     */
    public static String getRemoteAssetsUrl() {
        AdministrationService administrationService = Context.getAdministrationService();
        //Defaults to SPA environment at least for now.
        String path = administrationService.getGlobalProperty(SpaConstants.GP_REMOTE_ASSETS_URL,
                "https://spa-modules.nyc3.digitaloceanspaces.com/@openmrs/esm-app-shell/latest/");

        if (!path.endsWith("/")) {
            path = String.format("%s/", path);
        }

        return path;
    }
}
