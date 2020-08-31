/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.module.spa.utils.SpaModuleUtils;
import org.openmrs.util.OpenmrsUtil;

/**
 * A servlet that handles requests for the frontend static resources All
 * requests with /frontend are handled by the class
 */
public class SpaResourcesServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private Log log = LogFactory.getLog(this.getClass());

	/**
	 * Used for caching purposes
	 *
	 * @see HttpServlet#getLastModified(HttpServletRequest)
	 */
	@Override
	protected long getLastModified(HttpServletRequest req) {
		File f = getFile(req);

		if (f == null) {
			return super.getLastModified(req);
		}

		return f.lastModified();
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		log.debug("In service method for spa module frontend resource servlet: " + request.getPathInfo());

		File f = getFile(request);
		if (f == null) {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return;
		}

		response.setDateHeader("Last-Modified", f.lastModified());
		response.setContentLength(Long.valueOf(f.length()).intValue());
		String mimeType = OpenmrsUtil.getFileMimeType(f);
		response.setContentType(mimeType);

		FileInputStream is = new FileInputStream(f);
		try {
			OpenmrsUtil.copyFile(is, response.getOutputStream());
		} finally {
			OpenmrsUtil.closeStream(is);
		}
	}

	/**
	 * Turns the given request/path into a File object
	 *
	 * @param request the current http request
	 * @return the file being requested or null if not found
	 */
	protected File getFile(HttpServletRequest request) {

		String path = request.getPathInfo(); // all url will have a base of /spa/spaResources/
		String baseUrl = "/spa/spaResources";

		// we want to extract everything after /spa/spaResources/ from the path info.
		// This should cater for sub-directories
		String extractedFile = path.substring(path.indexOf('/', baseUrl.length() - 1) + 1, path.length());
		File folder = SpaModuleUtils.getSpaStaticFilesDir();

		String realPath = folder.getPath();
		realPath += "/" + extractedFile;
		realPath = realPath.replace("/", File.separator);

		File f = new File(realPath);
		if (!f.exists()) {
			log.warn("No file with path '" + realPath + "' exists");
			return null;
		}

		return f;
	}

}
