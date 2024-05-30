package org.openmrs.module.spa;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URLConnection;
import java.nio.file.Files;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

@RequestMapping(value = {"/spa", "/ws/spa"}, method = RequestMethod.GET)
@Slf4j
public class SpaController {

    private static final Pattern URL_PATTERN = Pattern.compile("(?:/ws)?/spa");

    private final SpaResourceLoader resourceLoader;

    @Autowired
    SpaController(@Qualifier("spaResourceLoader") SpaResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    /**
     * This controller method handles importmap.json, routes.registry.json and service-worker.js, ensuring that they are
     * sent with no-cache and must-revalidate headers.
     * <p/>
     * Note that if you are using the {@code --hash-import-map} feature of the {@code assemble} command, your distro's
     * importmap will look like importmap.&lt;hash&gt;.json and <em>should</em> be cached.
     */
    @RequestMapping("/{filename:(?:importmap|routes\\.registry)\\.json|service-worker\\.js}")
    public ResponseEntity<Resource> getStaticFileWithoutCacheHeaders(@PathVariable String filename) {
        FileSystemResource resource = (FileSystemResource) resourceLoader.getResource("/" + filename);
        if (resource.exists()) {
            MediaType mediaType = filename.equalsIgnoreCase("service-worker") ? MediaType.parseMediaType("text/javascript") : MediaType.APPLICATION_JSON;

            return ResponseEntity.ok()
                    .cacheControl(CacheControl.noCache().mustRevalidate())
                    .header("Expires", "0")
                    .contentType(mediaType)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * This controller method attempts to handle any file with an extension that is not .html or .htm and resolve it to
     * a file. All resources return in this way should be cached for as long as possible. Technically that's not what
     * we do here, but 6 months is probably long enough.
     */
    @RequestMapping(value = "/**/{filename:.*\\.(?!html?)[^.]+$}")
    public ResponseEntity<Resource> getStaticFile(HttpServletRequest request) {
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

            return ResponseEntity.ok()
                    .cacheControl(CacheControl.maxAge(180, TimeUnit.DAYS))
                    .headers(headers ->
                            headers.setExpires(Instant.now().plus(180, ChronoUnit.DAYS))
                    )
                    .contentType(mediaType)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * This controller method should handle everything else, and we assume that the correct response is the index.html
     * file. Like {@link #getStaticFileWithoutCacheHeaders(String)}, this attempts to force the client to always reload
     * this resource.
     */
    @RequestMapping({"/**/{filename:.?(?!.*\\.[^.]*$).*$}", "*.html", "*.htm"})
    public ResponseEntity<Resource> getSinglePage() {
        Resource resource = resourceLoader.getResource("/index.html");
        if (resource.exists()) {
            return ResponseEntity.ok()
                    .cacheControl(CacheControl.noCache().mustRevalidate())
                    .header("Expires", "0")
                    .contentType(MediaType.TEXT_HTML)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
