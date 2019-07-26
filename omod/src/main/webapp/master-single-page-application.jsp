<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OpenMRS</title>
    <base href="${requestScope.openmrsBaseUrlContext}${requestScope.spaBaseUrlContext}${'/'}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="importmap-type" content="systemjs-importmap">
    <link rel="preload" href="${cookie['import-map-override-url'] == null ? '/frontend/import-map.json' : cookie['import-map-override-url'].getValue()}" as="fetch" crossorigin="anonymous" />
    <script type='systemjs-importmap' src="${cookie['import-map-override-url'] == null ? '/frontend/import-map.json' : cookie['import-map-override-url'].getValue()}"></script>
    <script src="/frontend/import-map-overrides@1.7.2/dist/import-map-overrides.min.js"></script>
    <script src="/frontend/systemjs@4.1.0/system.min.js"></script>
    <script src="/frontend/systemjs@4.1.0/extras/amd.min.js"></script>
    <script src="/frontend/systemjs@4.1.0/extras/named-exports.js"></script>
    <script src="/frontend/systemjs@4.1.0/extras/named-register.min.js"></script>
    <script src="/frontend/systemjs@4.1.0/extras/use-default.min.js"></script>
    <script>
      window.openmrsBase= "${requestScope.openmrsBaseUrlContext}";
      window.spaBase =  "${requestScope.spaBaseUrlContext}";
      window.getOpenmrsSpaBase = function() { return window.openmrsBase + window.spaBase + '/';};
      System.import("@openmrs/root-config");
    </script>
  </head>
  <body>
  </body>
</html>
