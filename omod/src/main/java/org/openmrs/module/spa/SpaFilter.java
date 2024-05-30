package org.openmrs.module.spa;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SpaFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
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
