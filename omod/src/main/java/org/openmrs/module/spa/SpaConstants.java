/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 * 
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa;


/**
 * Constants used in SingleSpa Module.
 */
public final class SpaConstants {

	SpaConstants() {}

    public static final String DEFAULT_SPA_BASE_URL = "/spa";
	
	public static final String GP_KEY_SPA_BASE_URL = "spa.baseUrl";

	public static final String DEFAULT_FRONTEND_DIRECTORY = "frontend";

	public static final String GLOBAL_PROPERTY_SPA_STATIC_FILES_DIR = "spa.frontend.directory";

	public static final String GLOBAL_PROPERTY_FRONTEND_RESOURCE_BASE_URL = "spa.frontend.resourceBaseUrl";

	public static final String DEFAULT_FRONTEND_RESOURCE_BASE_URL = "/frontend";

	public static final String GP_IS_REMOTE_ASSETS_ENABLED = "spa.remote.assets.enabled";

	public static final String GP_REMOTE_ASSETS_URL = "spa.remote.assets.url";
}

