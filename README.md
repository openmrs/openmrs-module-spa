# openmrs-module-spa

This project is an OpenMRS java module that makes it possible for Tomcat to serve an SPA instead of expecting all routes
to be handled by server side JSPs/GSPs.

It is part of the microfrotends architecture that is explained at https://github.com/openmrs/openmrs-rfc-frontend.

## Development instructions
1. Clone this repository.
2. `mvn clean install`
3. Copy `omod/target/spa-1.0.0-SNAPSHOT.jar` to the `~/.OpenMRS/modules` directory. On mac/linux, this is `cp omod/target/spa-1.0.0-SNAPSHOT.omod ~/.OpenMRS/modules`
4. Add the following to [the web.xml file in openmrs-core](https://github.com/openmrs/openmrs-core/blob/master/webapp/src/main/webapp/WEB-INF/web.xml).
   This step is one we need to get rid of or work around. My hope is that we can get openmrs-core to respect the
   [web-fragment.xml](/omod/src/main/resources/META-INF/web-fragment.xml) file in this repository, but I have not succeeded
   in doing so yet, so we've got this manual step.
```xml
<servlet>
    <servlet-name>default</servlet-name>
    <servlet-class>org.openmrs.module.spa.web.SinglePageApplicationServlet</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name>default</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```
5. Run openmrs-core locally. I have been using `mvn jetty:run` instead of `mdn openmrs-sdk:run` because it uses my locally
changed files.
6. Go to http://localhost:8080/openmrs