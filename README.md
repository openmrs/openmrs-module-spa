# OpenMRS Module SPA

![Build Status](https://github.com/openmrs/openmrs-module-spa/workflows/Build%20with%20Maven/badge.svg)

~~The frontend SPA for OpenMRS code~~

This module provides backend functionality to serve frontend assests from a configured [path/directory/URL]
## Pre-requisties
- Maven
- Java >= 8

## Build
To build this module, first clone the repository 

```git clone https://github.com/openmrs/openmrs-module-spa.git```

Then navigate into `openmrs-module-spa` then run the build command;

```maven
cd openmrs-module-spa && mvn clean install
```

## Configurations
| Property      | Description | Default Value |
| ----------- | ----------- | ------------ |
|   `spa.local.directory`   | The directory containing the Frontend 3.0 application's `index.html`. Can be an absolute path, or relative to the application data directory. Only used if `spa.remote.enabled` is false.  | frontend |
| `spa.remote.enabled` | If enabled, serves from `spa.remote.url` instead of `spa.local.directory` | false |
| `spa.remote.url` | The URL of the Frontend 3.0 application files. Only used if `spa.remote.enabled` is true. | https://spa-modules.nyc3.digitaloceanspaces.com/@openmrs/esm-app-shell/latest/ |

## Development
