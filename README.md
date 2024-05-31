# OpenMRS Module SPA

![Build Status](https://github.com/openmrs/openmrs-module-spa/workflows/Build%20with%20Maven/badge.svg)

This module provides backend functionality to serve frontend assets from the O3 single-page application.

## Prerequisites
- Maven
- Java >= 8

## Build

To build this module, first clone the repository. Then navigate into `openmrs-module-spa` and run the build command:

```sh
cd openmrs-module-spa && mvn clean install
```

## Configuration

By default, this module will serve files from the `frontend` sub-directory of the OpenMRS Application Directory. If you
need to serve files stored in a different location, you set the setting `spa.local.directory` to either an absolute path
or a path relative to the OpenMRS Application Directory.
