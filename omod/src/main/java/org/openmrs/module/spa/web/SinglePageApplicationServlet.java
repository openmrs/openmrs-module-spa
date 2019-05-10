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

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.util.Scanner;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SinglePageApplicationServlet extends HttpServlet {
	
	private String htmlFile = "";
	
	private Log log = LogFactory.getLog(this.getClass());
	
	public SinglePageApplicationServlet() {
		super();
		try {
			InputStream inputStream = SinglePageApplicationServlet.class.getResourceAsStream("/web/module/index.htm");
			Scanner scanner = new Scanner(inputStream);
			scanner.useDelimiter("\\Z");
			this.htmlFile = scanner.next();
			scanner.close();
		}
		catch (Exception e) {
			log.error(e);
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("content-type", "text/html");
		response.setStatus(HttpServletResponse.SC_OK);
		
		try {
			response.getWriter().write(this.htmlFile);
			response.getWriter().flush();
		}
		catch (Exception e) {
			log.error(e);
		}
	}
}
