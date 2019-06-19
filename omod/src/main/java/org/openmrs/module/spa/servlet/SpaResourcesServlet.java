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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.Module;
import org.openmrs.module.ModuleUtil;
import org.openmrs.util.OpenmrsUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class SpaResourcesServlet extends HttpServlet {

	private final String FRONTENT_DIRECTORY = "frontend";
	private final String SINGLE_SPA_STATIC_FILES_DIR = "spa.frontend.directory";

	private static final long serialVersionUID = 1239820102030344L;

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
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		log.debug("In service method for module servlet: " + request.getPathInfo());
		
		File f = getFile(request);
		if (f == null) {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return;
		}
		
		response.setDateHeader("Last-Modified", f.lastModified());
		response.setContentLength(Long.valueOf(f.length()).intValue());
		String mimeType = getServletContext().getMimeType(f.getName());
		response.setContentType(mimeType);
		
		FileInputStream is = new FileInputStream(f);
		try {
			OpenmrsUtil.copyFile(is, response.getOutputStream());
		}
		finally {
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
		
		String path = request.getPathInfo();

		log.info("Testing script path: " + path);
		System.out.println("Testing script path: " + path);

		// ----------------------------------------------------------

		AdministrationService as = Context.getAdministrationService();
		String folderName = as.getGlobalProperty(SINGLE_SPA_STATIC_FILES_DIR,
				FRONTENT_DIRECTORY);

		// try to load the repository folder straight away.
		File folder = new File(folderName);

		// if the property wasn't a full path already, assume it was intended to be a folder in the
		// application directory
		if (!folder.exists()) {
			folder = new File(OpenmrsUtil.getApplicationDataDirectory(), folderName);
		}


		log.info("Testing folder path: " + folder);
		System.out.println("Testing folder path: " + folder);

		// ----------------------------------------------------------


		String realPath = getServletContext().getRealPath("") + OpenmrsUtil.getApplicationDataDirectory() + "/" + FRONTENT_DIRECTORY;

		log.info("real path: " + realPath);
		System.out.println("real path: " + realPath);

		/*//if in dev mode, load resources from the development directory
		File devDir = ModuleUtil.getDevelopmentDirectory(module.getModuleId());
		if (devDir != null) {
			realPath = devDir.getAbsolutePath() + "/omod/target/classes/web/module/resources" + relativePath;
		}*/
		
		realPath = realPath.replace("/", File.separator);
		
		File f = new File(realPath);
		if (!f.exists()) {
			log.warn("No file with path '" + realPath + "' exists");
			return null;
		}
		
		return f;
	}
	
}