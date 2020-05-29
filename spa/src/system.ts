import "import-map-overrides/dist/import-map-overrides";
import "systemjs/dist/system";
import "systemjs/dist/extras/amd";
import "systemjs/dist/extras/named-exports";
import "systemjs/dist/extras/named-register";
import "systemjs/dist/extras/use-default";

/**
 * Gets the loaded import maps from SystemJS.
 * TODO: Once there is an official API for this we should
 * replace this function with the official API.
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
