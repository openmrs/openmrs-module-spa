package org.openmrs.module.spa;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

@RequestMapping(value = {"/spa", "/ws/spa"}, method = RequestMethod.GET)
@Slf4j
public class SpaController {

    /**
     * Since we support both /spa and /ws/spa as the URL, we use this pattern to remove it from the request URI.
     */
    private static final Pattern URL_PATTERN = Pattern.compile("(?:/ws)?/spa");

    private static final Pattern OPENMRS_CSS_PATTERN = Pattern.compile("openmrs\\.(?:\\w+\\.)?css$");

    private static final MimeType TEXT_JAVASCRIPT = MimeType.valueOf("text/javascript");

    private final SpaResourceLoader resourceLoader;

    @Autowired
    SpaController(@Qualifier("spaResourceLoader") SpaResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    /**
     * This controller method attempts to handle any request for a URL that has a file extension other than .htm or .html.
     * It attempts to resolve this URL to a file using the resource loader.
     */
    @RequestMapping(value = "/**/{filename:.*\\.(?!html?)[^.]+$}")
    public ResponseEntity<Resource> getStaticFile(HttpServletRequest request) {
        // although the filename is there as a path variable, it's really being used as a regex. We also need the
        // directory relative to the /spa or /ws/spa URL to locate the file, so we extract that from the incoming
        // request
        String filename = request.getRequestURI();
        filename = filename.substring(request.getContextPath().length());
        filename = URL_PATTERN.matcher(filename).replaceFirst("");

        Resource resource = resourceLoader.getResource("/" + filename);
        if (resource.exists()) {
            MediaType mediaType;
            String contentType = request.getServletContext().getMimeType(filename);

            if (contentType == null || contentType.isEmpty()) {
                try {
                    contentType = Files.probeContentType(resource.getFile().toPath());
                } catch (IOException e) {
                    // ignored
                }
            }

            if (contentType != null && !contentType.isEmpty()) {
                mediaType = MediaType.parseMediaType(contentType);
            } else {
                mediaType = MediaType.APPLICATION_OCTET_STREAM;
            }

            if ((mediaType.includes(TEXT_JAVASCRIPT) && !filename.contains("service-worker")) || OPENMRS_CSS_PATTERN.matcher(filename).matches()) {
                return ResponseEntity.ok()
                        .cacheControl(CacheControl.maxAge(365, TimeUnit.DAYS))
                        .headers(headers -> headers.setExpires(Instant.now().plus(365, ChronoUnit.DAYS)))
                        .contentType(mediaType)
                        .body(resource);
            }

            return ResponseEntity.ok()
                    .cacheControl(CacheControl.noCache().mustRevalidate())
                    .contentType(mediaType)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().cacheControl(CacheControl.noCache().mustRevalidate()).build();
        }
    }

    /**
     * This controller method should handle every other URL. We assume that the correct response is the index.html, i.e.,
     * the single page.
     */
    @RequestMapping({ "/", "/**/{filename:.?(?!.*\\.[^.]*$).*$}", "*.html", "*.htm"})
    public ResponseEntity<Resource> getSinglePage() {
        Resource resource = resourceLoader.getResource("/index.html");
        if (resource.exists()) {
            return ResponseEntity.ok()
                    .cacheControl(CacheControl.noCache().mustRevalidate())
                    .contentType(MediaType.TEXT_HTML)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().cacheControl(CacheControl.noCache().mustRevalidate()).build();
        }
    }

    @RequestMapping("")
    public ResponseEntity<Resource> index(HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY).location(URI.create(request.getContextPath() + "/spa/")).build();
    }
}
