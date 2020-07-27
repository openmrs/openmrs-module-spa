import { singleSpa } from "./constants";

declare global {
  interface Window {
    renderOpenmrsExtension(
      target: HTMLElement,
      name: string,
      params: any
    ): CancelLoading;
  }
}

export interface CancelLoading {
  (): void;
}

export interface ExtensionDefinition {
  appName: string;
  name: string;
  load(): Promise<any>;
}

/**
 * Creates the extension component <-> extension slot management engine.
 * 
 * Essentially provides the `renderOpenmrsExtension` function for
 * updating a DOM node (representing a so-called "extension slot")
 * dynamically with a lazy loaded component from *any* microfrontend
 * that registered an extension component for this slot.
 * 
 * The critical piece of information is the "name" parameter, which
 * creates the connection "component" <-> "slot".
 */
export function createExtensions() {
  const extensions: Record<string, Array<ExtensionDefinition>> = {};

  System.import(singleSpa).then(({ mountRootParcel }) => {
    window.renderOpenmrsExtension = (domElement, name, params) => {
      const components = extensions[name] ?? [];
      const parcels: Array<any> = [];
      let active = true;

      if (domElement) {
        components.map(({ load }) =>
          load().then(
            ({ default: result }) =>
              active &&
              parcels.push(
                mountRootParcel(result, {
                  domElement,
                  ...params,
                })
              )
          )
        );
      }

      return () => {
        active = false;
      };
    };
  });

  return extensions;
}
