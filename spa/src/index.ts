import { getImportMaps, loadModules } from "./system";

const singleSpa = "single-spa";

declare global {
  interface Window extends SpaConfig {
    getOpenmrsSpaBase(): string;
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
  /**
   * The names of additional modules to load initially,
   * if any.
   */
  coreLibs?: Array<string>;
}

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
 * Sets up the microfrontends (apps). Uses the defined export
 * from the root modules of the apps, which should export a
 * special function called "setupOpenMRS".
 * This function returns an object that is used to feed Single
 * SPA.
 */
function setupApps(modules: Array<[string, System.Module]>) {
  for (const [appName, appExports] of modules) {
    const setup = appExports.setupOpenMRS;

    if (typeof setup === "function") {
      const result = setup();

      if (result && typeof result === "object") {
        System.import(singleSpa).then(({ registerApplication }) => {
          registerApplication(appName, result.lifecycle, result.activate);
        });
      }
    }
  }
}

/**
 * Initializes the OpenMRS Microfrontend App Shell.
 * @param config The global configuration to apply.
 */
export function initializeSpa(config: SpaConfig) {
  const libs = config.coreLibs ?? [];

  window.openmrsBase = config.openmrsBase;
  window.spaBase = config.spaBase;
  window.getOpenmrsSpaBase = () => `${window.openmrsBase}${window.spaBase}/`;

  return loadModules([...libs, singleSpa])
    .then(loadApps)
    .then(setupApps);
}
