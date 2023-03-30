/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.web;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration.Dynamic;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;
import java.util.EnumSet;

import org.openmrs.module.spa.filter.SpaFilter;
import org.openmrs.module.spa.servlet.SpaServlet;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

@Component
public class SpaWebComponentRegistrar implements ServletContextAware {

    @Override
    public void setServletContext(ServletContext servletContext) {

        try {
            ServletRegistration openmrsServletReg = servletContext.getServletRegistration("openmrs");
            openmrsServletReg.addMapping("/frontend/*");

            ServletRegistration servletReg = servletContext.addServlet("spaServlet", new SpaServlet());
            servletReg.addMapping("/frontend/config.json");

            Dynamic filter = servletContext.addFilter("spaFilter", new SpaFilter());
            filter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "/frontend/config.json");
        }
        catch (Exception ex) {
            //TODO need a work around for: java.lang.IllegalStateException: Started
            //Unable to configure mapping for servlet because this servlet context has already been initialized.
            //This happens on running openmrs after InitializationFilter or UpdateFilter
            //hence requiring a restart to see any page other than index.htm
            //After a restart, all mappings will then happen within Listener.contextInitialized()
            ex.printStackTrace();
        }
    }
}
