/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 * 
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.filter;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.utils.SpaModuleUtils;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.regex.Pattern;

public class SpaResourcesFilter implements Filter {

	private Log log = LogFactory.getLog(this.getClass());

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest request = (HttpServletRequest) req;
		String spaResourceBasePath = Context.getAdministrationService().getGlobalProperty(SpaModuleUtils.GLOBAL_PROPERTY_FRONTEND_RESOURCE_BASE_URL,
				SpaModuleUtils.DEFAULT_FRONTEND_RESOURCE_BASE_URL);
		
		if (StringUtils.isBlank(spaResourceBasePath)) {
			spaResourceBasePath = SpaModuleUtils.DEFAULT_FRONTEND_RESOURCE_BASE_URL;
		}
		
		String requestURL = null;
		if (isFullBasePath(spaResourceBasePath)) {
			requestURL = request.getRequestURL().toString();
		} else {
			requestURL = request.getServletPath();
		}

		if (requestURL.startsWith(spaResourceBasePath)) {
			String newURL = requestURL.replaceFirst(Pattern.quote(spaResourceBasePath), "/ms/spa/spaModuleResources");
			req.getRequestDispatcher(newURL).forward(req, res);
		} else {
			chain.doFilter(req, res);
		}
	}
	
	//spaResourceBasePath can be either full path (must contain protocol) or relative servlet path
	public static boolean isFullBasePath(String spaBasePath) {
		return spaBasePath.contains("://");
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void destroy() {

	}
}