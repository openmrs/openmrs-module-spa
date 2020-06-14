import { i18n } from "i18next";
import { getImportMaps, loadModules } from "./system";
import { setupI18n } from "./locale";
import {
  routePrefix,
  Activator,
  ActivatorDefinition,
  routeRegex,
} from "./helpers";

const singleSpa = "single-spa";

declare global {
  interface Window extends SpaConfig {
    getOpenmrsSpaBase(): string;
    i18next: i18n;
  }
}

export interface SpaConfig {
  /**
   * The base path for the OpenMRS API / endpoints.
   */
  openmrsBase: string;
  /**
   * The base path for the SPA root path.
   */
  spaBase: string;
}

const coreLibs = [
  "@openmrs/esm-styleguide",
  "@openmrs/esm-module-config"
]

/**
 * Gets the microfrontend modules (apps). These are entries
 * in the import maps that end with "-app".
 * @param maps The value of the "imports" property of the
 * import maps.
 */
function getApps(maps: Record<string, string>) {
  return Object.keys(maps).filter((m) => m.endsWith("-app"));
}

/**
 * Loads the microfrontends (apps). Should be done *after* the
 * import maps initialized, i.e., after modules loaded.
 */
function loadApps() {
  return loadModules(getApps(getImportMaps()));
}

/**
 * Loads 'root-config' and returns its activatorOverrides object if present
 */
async function loadOptionalRootConfig(): Promise<ActivatorOverrides | void> {
  let rootConfigExists: boolean;
  try {
    System.resolve("root-config");
    rootConfigExists = true;
  } catch {
    rootConfigExists = false;
  }
  if (rootConfigExists) {
    try {
      const rootConfig = await System.import("root-config");
      if (rootConfig.activatorOverrides) {
        if (
          typeof rootConfig.activatorOverrides === "object" &&
          !Array.isArray(rootConfig.activatorOverrides)
        ) {
          return rootConfig.activatorOverrides;
        } else {
          throw Error(
            "activatorOverrides must be an object with module names as keys. Got type " +
              typeof rootConfig.activatorOverrides
          );
        }
      }
    } catch (e) {
      throw Error("Problem importing root-config: " + e);
    }
  }
}

/**
 * Normalizes the activator function, i.e., if we receive a
 * string we'll prepend the SPA base (prefix). We'll also handle
 * the case of a supplied array.
 * @param activator The activator to preprocess.
 */
function preprocessActivator(
  activator: ActivatorDefinition | Array<ActivatorDefinition>
): Activator {
  if (Array.isArray(activator)) {
    const activators = activator.map(preprocessActivator);
    return (location) => activators.some((activator) => activator(location));
  } else if (typeof activator === "string") {
    return (location) => routePrefix(activator, location);
  } else if (activator instanceof RegExp) {
    return (location) => routeRegex(activator, location);
  } else {
    return activator;
  }
}

/**
 * Sets up the microfrontends (apps). Uses the defined export
 * from the root modules of the apps, which should export a
 * special function called "setupOpenMRS".
 * This function returns an object that is used to feed Single
 * SPA.
 */
function setupApps(
  modules: Array<[string, System.Module]>,
  activatorOverrides: ActivatorOverrides
) {
  const promises: Promise<void>[] = [];
  for (const [appName, appExports] of modules) {
    const setup = appExports.setupOpenMRS;

    if (typeof setup === "function") {
      const result = setup();

      if (result && typeof result === "object") {
        const activator = activatorOverrides[appName] || result.activate;
        promises.push(System.import(singleSpa).then(({ registerApplication }) => {
          registerApplication(
            appName,
            result.lifecycle,
            preprocessActivator(activator)
          );
        }));
      }
    }
  }
  return Promise.all(promises);
}

/**
 * Runs the shell by importing the translations and starting single SPA.
 */
function runShell() {
  return System.import(singleSpa).then(({ start }) => {
    return setupI18n()
      .catch((err) => console.error(`Failed to initialize translations`, err))
      .then(start);
  });
}

/**
 * Initializes the OpenMRS Microfrontend App Shell.
 * @param config The global configuration to apply.
 */
export async function initializeSpa(config: SpaConfig) {
  const libs = coreLibs;

  window.openmrsBase = config.openmrsBase;
  window.spaBase = config.spaBase;
  window.getOpenmrsSpaBase = () => `${window.openmrsBase}${window.spaBase}/`;

  await loadModules([...libs, singleSpa]);
  const [apps, activatorOverrides] = await Promise.all([
    loadApps(),
    loadOptionalRootConfig()
  ]);
  await setupApps(apps, activatorOverrides || {});
  runShell();
}

type ActivatorOverrides = {
  [moduleName: string]: ActivatorDefinition;
};
