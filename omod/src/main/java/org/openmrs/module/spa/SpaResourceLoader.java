package org.openmrs.module.spa;

import org.springframework.core.io.ContextResource;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.lang.NonNull;

import java.nio.file.Paths;

/**
 * This is a resource loader for files served by the {@link SpaController}. It is modelled on Spring's
 * {@link FileSystemContextResource}, but uses absolute paths. Safety checks for where the SPA is served from are handled
 * by the {@link SpaDirectoryResolver} directly.
 */
public class SpaResourceLoader extends DefaultResourceLoader {

    @Override
    @NonNull
    protected Resource getResourceByPath(@NonNull String path) {
        if (path.startsWith("/")) {
            path = path.substring(1);
        }

        return new FileSystemContextResource(Paths.get(SpaDirectoryResolver.getSpaDirectory(), path).normalize().toAbsolutePath().toString());
    }

    protected static class FileSystemContextResource extends FileSystemResource implements ContextResource {

        public FileSystemContextResource(String path) {
            super(path);
        }

        @Override
        @NonNull
        public String getPathWithinContext() {
            return getPath();
        }
    }
}
