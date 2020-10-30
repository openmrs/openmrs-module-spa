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

import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.openmrs.module.spa.utils.SpaModuleUtils;

import java.io.File;
import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static org.openmrs.module.util.SingleSpaConstants.*;

public class SpaServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String requestPath = req.getPathInfo();
		if (requestPath.endsWith(".js") || requestPath.endsWith(".css")) {
			String spaBasePath = Context.getAdministrationService().getGlobalProperty(GP_KEY_SPA_BASE_URL,
					DEFAULT_SPA_BASE_URL);
			String newURL = requestPath.replaceFirst(Pattern.quote(spaBasePath), "/ms/spa/spaResources/");
			req.getRequestDispatcher(newURL).forward(req, resp);
			return;
		}
		File indexFile = getCustomIndexFile();
		if (indexFile == null) {
			RequestDispatcher dispatcher = req.getRequestDispatcher("/module/spa/master-single-page-application.form");
			dispatcher.forward(req, resp);
			return;
		}
		SpaModuleUtils.serveFile(indexFile, resp, "text/html");
	}

	protected File getCustomIndexFile() {

		String indexPath = SpaModuleUtils.getSpaStaticFilesDir().getPath() + "/index.html";
		indexPath = indexPath.replace("/", File.separator);

		File f = new File(indexPath);
		if (!f.exists()) {
			return null;
		}
		return f;
	}
}