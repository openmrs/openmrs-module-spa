<!DOCTYPE html>
<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OpenMRS</title>
    <base href="${requestScope.openmrsBaseUrlContext}${requestScope.spaBaseUrlContext}${'/'}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="importmap-type" content="systemjs-importmap">
    <link rel="preload" href="${cookie['import-map-override-url'] == null ? requestScope.openmrsBaseUrlContext.concat('/frontend/import-map.json') : cookie['import-map-override-url'].getValue()}" as="fetch" crossorigin="anonymous" />
    <script type='systemjs-importmap' src="${cookie['import-map-override-url'] == null ? requestScope.openmrsBaseUrlContext.concat('/frontend/import-map.json') : cookie['import-map-override-url'].getValue()}"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/import-map-overrides@1.8.0/dist/import-map-overrides.js"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/systemjs@6.1.3/dist/system.min.js"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/systemjs@6.1.3/dist/extras/amd.min.js"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/systemjs@6.1.3/dist/extras/named-exports.js"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/systemjs@6.1.3/dist/extras/named-register.min.js"></script>
    <script src="${requestScope.openmrsBaseUrlContext}/frontend/systemjs@6.1.3/dist/extras/use-default.min.js"></script>
    <script>
      window.openmrsBase= "${requestScope.openmrsBaseUrlContext}";
      window.spaBase =  "${requestScope.spaBaseUrlContext}";
      window.getOpenmrsSpaBase = function() { return window.openmrsBase + window.spaBase + '/';};
      System.import('@openmrs/esm-root-config');
      System.import('@openmrs/esm-styleguide');
    </script>
    <c:if test="${requestScope.spaHeadContentUrl != null }">
      <c:import url="${requestScope.spaHeadContentUrl}" />
    </c:if>
  </head>
  <body>
    <c:if test="${requestScope.spaBodyContentUrl != null }">
      <c:import url="${requestScope.spaBodyContentUrl}" />
    </c:if>
  </body>
</html>
