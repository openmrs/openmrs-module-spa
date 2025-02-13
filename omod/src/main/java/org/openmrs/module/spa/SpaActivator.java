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
import org.openmrs.api.GlobalPropertyListener;
import org.openmrs.api.context.Context;
import org.openmrs.module.BaseModuleActivator;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.openmrs.module.spa.SpaConstants.BUNDLED_FRONTEND_DIRECTORY;
import static org.openmrs.module.spa.SpaConstants.GP_LOCAL_DIRECTORY;

@Slf4j
public class SpaActivator extends BaseModuleActivator implements ServletContextAware {

	// here so we can register the listener on load and de-register it when stopped
	private GlobalPropertyListener spaDirectoryResolver = null;

	public static ServletContext servletContext;

	@Override
	public void started() {
		log.info("SPA module started");
		spaDirectoryResolver = new SpaDirectoryResolver();
		Context.getAdministrationService().addGlobalPropertyListener(spaDirectoryResolver);
	}

	@Override
	public void contextRefreshed() {
		String spaDirectory = SpaDirectoryResolver.getSpaDirectory();
		if (spaDirectory == null) {
		    return;
		}
		if (!Paths.get(spaDirectory, "index.html").toFile().exists()) {
			Path bundledFrontend = Paths.get(servletContext.getRealPath("/"), "WEB-INF", BUNDLED_FRONTEND_DIRECTORY);
			if (bundledFrontend.resolve("index.html").toFile().exists()) {
				Context.getAdministrationService().setGlobalProperty(GP_LOCAL_DIRECTORY, bundledFrontend.toAbsolutePath().toString());
			}
		}
	}

	@Override
	public void stopped() {
		Context.getAdministrationService().removeGlobalPropertyListener(spaDirectoryResolver);
		spaDirectoryResolver = null;
		log.info("SPA module stopped");
	}

	@Override
	public void setServletContext(ServletContext servletContext) {
		SpaActivator.servletContext = servletContext;
	}
}