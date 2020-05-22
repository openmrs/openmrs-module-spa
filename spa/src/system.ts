import "import-map-overrides/dist/import-map-overrides.js";
import "systemjs/dist/system.min.js";
import "systemjs/dist/extras/amd.min.js";
import "systemjs/dist/extras/named-exports.min.js";
import "systemjs/dist/extras/named-register.min.js";
import "systemjs/dist/extras/use-default.min.js";

/**
 * Gets the loaded import maps from SystemJS.
 */
export function getImportMaps() {
  return Object.getOwnPropertySymbols(System)
    .map((sym) => System[sym])
    .filter((m) => typeof m.imports !== "undefined")
    .map((m) => m.imports)
    .pop();
}

/**
 * Loads all provided modules by their name. Performs a
 * SystemJS import.
 * @param modules The names of the modules to resolve.
 */
export function loadModules(modules: Array<string>) {
  return Promise.all(
    modules.map((name) =>
      System.import(name).then((value): [string, System.Module] => [
        name,
        value,
      ])
    )
  );
}
