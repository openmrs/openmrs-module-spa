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

import org.apache.commons.lang3.StringUtils;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.PrivilegeConstants;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.regex.Pattern;

public class SpaPostFilter implements Filter {

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		String requestURL = request.getServletPath();
		String newURL = requestURL.replaceFirst(Pattern.quote("/ws/spa/"), "/ms/spa/spaPostServlet/");
		req.getRequestDispatcher(newURL).forward(req, res);
		chain.doFilter(req, res);
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