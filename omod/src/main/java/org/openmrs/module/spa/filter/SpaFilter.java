/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 * 
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.filter;

import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.openmrs.api.context.Context;

import static org.openmrs.module.spa.SpaConstants.DEFAULT_SPA_BASE_URL;
import static org.openmrs.module.spa.SpaConstants.GP_KEY_SPA_BASE_URL;

public class SpaFilter implements Filter {

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest request = (HttpServletRequest) req;
		String spaBasePath = Context.getAdministrationService().getGlobalProperty(GP_KEY_SPA_BASE_URL,
				DEFAULT_SPA_BASE_URL);
		
		if (StringUtils.isBlank(spaBasePath)) {
			spaBasePath = DEFAULT_SPA_BASE_URL;
		}
		
		String requestURL = null;
		if (isFullBasePath(spaBasePath)) {
			requestURL = request.getRequestURL().toString();
		} else {
			requestURL = request.getServletPath();
		}
		
		if (requestURL.startsWith(spaBasePath)) {
			String newURL = requestURL.replaceFirst(Pattern.quote(spaBasePath), "/ms/spa/spaServlet/");
			req.getRequestDispatcher(newURL).forward(req, res);
		} else {
			chain.doFilter(req, res);
		}
	}
	
	//spaBasePath can be either full path (must contain protocol) or relative servlet path
	public static boolean isFullBasePath(String spaBasePath) {
		return spaBasePath.contains("://");
	}

	@Override
	public void init(FilterConfig filterConfig) {
		
	}

	@Override
	public void destroy() {

	}
}