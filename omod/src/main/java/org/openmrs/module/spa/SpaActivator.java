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

@Slf4j
public class SpaActivator extends BaseModuleActivator {

	// here so we can register the listener on load and de-register it when stopped
	private GlobalPropertyListener spaDirectoryResolver = null;

	@Override
	public void started() {
		log.info("SPA module started");
		spaDirectoryResolver = new SpaDirectoryResolver();
		Context.getAdministrationService().addGlobalPropertyListener(spaDirectoryResolver);
	}

	@Override
	public void stopped() {
		Context.getAdministrationService().removeGlobalPropertyListener(spaDirectoryResolver);
		spaDirectoryResolver = null;
		log.info("SPA module stopped");
	}
}