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

import lombok.extern.slf4j.Slf4j;
import org.openmrs.module.BaseModuleActivator;
import org.openmrs.module.ModuleException;
import org.openmrs.module.spa.utils.SpaModuleUtils;

import java.io.File;

@Slf4j
public class SpaActivator extends BaseModuleActivator {

	@Override
	public void started() {
	    createFrontendDirectory();
		log.info("SPA module started");
	}

	@Override
	public void stopped() {
		log.info("SPA module stopped");
	}

	/**
	 * Creates a directory to hold static files for the frontend if none exists.
	 * The default directory name is stored in a global property and can be edited.
	 * By default, the directory is created in the OpenMRS app directory
	 * If the default value is edited, and a full path provided, the directory is created as per user specification
	 *
	 */
	public void createFrontendDirectory() {

		File folder = SpaModuleUtils.getSpaStaticFilesDir();
		// now create the modules folder if it doesn't exist
		if (!folder.exists()) {
			log.warn("Frontend directory " + folder.getAbsolutePath() + " doesn't exist.  Creating it now.");
			folder.mkdirs();
		}

		if (!folder.isDirectory()) {
			throw new ModuleException("SPA frontend repository is not a directory at: " + folder.getAbsolutePath());
		}
	}
}