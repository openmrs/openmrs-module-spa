package org.openmrs.module.spa.utils;

import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.util.OpenmrsUtil;

import java.io.File;

public class SpaModuleUtils {

    public static final String DEFAULT_FRONTEND_DIRECTORY = "frontend";
    public static final String GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR = "spa.frontend.directory";
    public static final String GLOBAL_PROPERTY_FRONTEND_RESOURCE_BASE_URL = "spa.frontend.resourceBaseUrl";
    public static final String DEFAULT_FRONTEND_RESOURCE_BASE_URL = "/frontend";
    public static final String GLOBAL_PROPERTY_FRONTEND_WHITELIST_URLS = "spa.frontend.whiteList";

    /**
     * Reads the value of GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR from GP. Should
     * return null if the path specified does not point to valid file or directory
     * 
     * @return directory for the path specified in the GP
     */
    public static File getSpaStaticFilesDir() {
        AdministrationService as = Context.getAdministrationService();
        String folderName = as.getGlobalProperty(SpaModuleUtils.GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR,
                SpaModuleUtils.DEFAULT_FRONTEND_DIRECTORY);

        // try to load the repository folder straight away.
        File folder = new File(folderName);

        // if the property wasn't a full path already, assume it was intended to be a
        // folder in the
        // application directory
        if (!folder.exists()) {
            folder = new File(OpenmrsUtil.getApplicationDataDirectory(), folderName);
        }
        return folder;
    }
}
