package org.openmrs.module.spa;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * This filter is a little hacky. OpenMRS installs the Spring Dispatcher Servlet on the URL pattern /ws/**, so in order
 * to ensure <em>all</em> requests reach the Dispatcher Servlet, we just re-write, /spa/* to /ws/spa/*. Without this,
 * some requests would reach the controller, but most requests, especially those for CSS and JS, would not.
 */
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
