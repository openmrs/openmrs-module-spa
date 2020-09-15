<!DOCTYPE html>
<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OpenMRS</title>
    <link rel="shortcut icon" type="image/x-icon" href="/openmrs/images/openmrs-favicon.ico"/>
    <base href="${requestScope.openmrsBaseUrlContext}${requestScope.spaBaseUrlContext}${'/'}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="importmap-type" content="systemjs-importmap">
    <link rel="preload" href="${cookie['import-map-override-url'] == null ? requestScope.importMapUrl : cookie['import-map-override-url'].getValue()}" as="fetch" crossorigin="anonymous" />
    <script type='systemjs-importmap' src="${cookie['import-map-override-url'] == null ? requestScope.importMapUrl : cookie['import-map-override-url'].getValue()}"></script>
    <script src="${requestScope.initialScriptUrl}"></script>
    <script>
      initializeSpa({
        openmrsBase: "${requestScope.openmrsBaseUrlContext}",
        spaBase: "${requestScope.spaBaseUrlContext}"
      });
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
