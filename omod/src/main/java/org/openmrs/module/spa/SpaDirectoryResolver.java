package org.openmrs.module.spa;

import lombok.extern.slf4j.Slf4j;
import org.openmrs.GlobalProperty;
import org.openmrs.api.GlobalPropertyListener;
import org.openmrs.api.context.Context;
import org.openmrs.util.OpenmrsUtil;
import org.openmrs.util.PrivilegeConstants;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.atomic.AtomicReference;

import static org.openmrs.module.spa.SpaConstants.DEFAULT_FRONTEND_DIRECTORY;
import static org.openmrs.module.spa.SpaConstants.GP_LOCAL_DIRECTORY;

/**
 * This is a GlobalPropertyListener that just listens for the spa.local.directory property and, when it changes,
 * resolves it to a physical directory.
 */
@Slf4j
public class SpaDirectoryResolver implements GlobalPropertyListener {

    private static final AtomicReference<String> spaDirectory = new AtomicReference<>();

    public SpaDirectoryResolver() {
        resolveDirectory(getDirectoryFromSettings());
    }

    @Override
    public boolean supportsPropertyName(String property) {
        return GP_LOCAL_DIRECTORY.equals(property);
    }

    @Override
    public void globalPropertyChanged(GlobalProperty globalProperty) {
        resolveDirectory(globalProperty.getPropertyValue());
    }

    @Override
    public void globalPropertyDeleted(String property) {
        resolveDirectory(getDirectoryFromSettings());
    }

    public static String getSpaDirectory() {
        return spaDirectory.get();
    }

    private String getDirectoryFromSettings() {
        String localDirectory;
        try {
            Context.addProxyPrivilege(PrivilegeConstants.GET_GLOBAL_PROPERTIES);
            localDirectory = Context.getAdministrationService().getGlobalProperty(GP_LOCAL_DIRECTORY);
        } finally {
            Context.removeProxyPrivilege(PrivilegeConstants.GET_GLOBAL_PROPERTIES);
        }
        if (localDirectory == null) {
            localDirectory = Context.getRuntimeProperties().getProperty(GP_LOCAL_DIRECTORY);

            if (localDirectory == null) {
                localDirectory = System.getProperty(GP_LOCAL_DIRECTORY);

                if (localDirectory == null) {
                    localDirectory = DEFAULT_FRONTEND_DIRECTORY;
                }
            }
        }

        return localDirectory;
    }

    private static void resolveDirectory(String spaDirectory) {
        if (spaDirectory == null) {
            SpaDirectoryResolver.spaDirectory.compareAndSet(null, Paths.get(OpenmrsUtil.getApplicationDataDirectory(), DEFAULT_FRONTEND_DIRECTORY).normalize().toString());
            return;
        }

        Path spaDirectoryPath = Paths.get(spaDirectory);
        if (!spaDirectoryPath.isAbsolute()) {
            String applicationDataDirectory = OpenmrsUtil.getApplicationDataDirectory();
            spaDirectoryPath = Paths.get(applicationDataDirectory, spaDirectory);
            if (!spaDirectoryPath.startsWith(applicationDataDirectory)) {
                log.error("Path traversal attempt detected in system setting {}: '{}'. Resolving to default.", GP_LOCAL_DIRECTORY, spaDirectory);
                SpaDirectoryResolver.spaDirectory.set(Paths.get(OpenmrsUtil.getApplicationDataDirectory(), DEFAULT_FRONTEND_DIRECTORY).normalize().toAbsolutePath().toString());
            }
            SpaDirectoryResolver.spaDirectory.set(spaDirectoryPath.normalize().toString());
        } else {
            SpaDirectoryResolver.spaDirectory.set(spaDirectory);
        }
    }
}
