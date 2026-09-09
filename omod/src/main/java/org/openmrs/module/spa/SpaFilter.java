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

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * This filter is a little hacky. OpenMRS installs the Spring Dispatcher Servlet on the URL pattern
 * /ws/**, so in order to ensure <em>all</em> requests reach the Dispatcher Servlet, we just
 * re-write, /spa/* to /ws/spa/*. Without this, some requests would reach the controller, but most
 * requests, especially those for CSS and JS, would not.
 */
public class SpaFilter extends HttpFilter {
	
	@Override
	protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
	        throws IOException, ServletException {
		if (!res.isCommitted()) {
			String requestUri = req.getRequestURI();
			requestUri = requestUri.substring(req.getContextPath().length());
			if (!requestUri.startsWith("/")) {
				requestUri = "/" + requestUri;
			}
			
			req.getRequestDispatcher("/ws" + requestUri).forward(req, res);
		} else {
			chain.doFilter(req, res);
		}
	}
}
