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

import org.openmrs.web.filter.GZIPResponseWrapper;
import org.springframework.http.HttpHeaders;
import org.springframework.lang.NonNull;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * This uses OpenMRS core's GZip implementation, but without requiring any configuration. It should
 * be ok to gzip anything returned from this module, so we just do.
 */
public class SpaCompressionFilter extends OncePerRequestFilter {
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, @NonNull HttpServletResponse response,
	        @NonNull FilterChain filterChain) throws ServletException, IOException {
		String acceptEncoding = request.getHeader(HttpHeaders.ACCEPT_ENCODING);
		if (acceptEncoding == null || !acceptEncoding.contains("gzip")) {
			filterChain.doFilter(request, response);
			return;
		}
		
		filterChain.doFilter(request, new GZIPResponseWrapper(response));
	}
}
