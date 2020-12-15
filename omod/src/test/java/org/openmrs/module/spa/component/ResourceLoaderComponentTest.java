/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.spa.component;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ResourceLoaderComponentTest {

    private static final String RESOURCE_PATH = "https://location-test/resources";

    private ResourceLoaderComponent loaderComponent;

   private final Resource resource = mock(Resource.class);

    private final ResourceLoader resourceLoader = mock(ResourceLoader.class);

    @Before
    public void setup() {
        when(resourceLoader.getResource(RESOURCE_PATH)).thenReturn(resource);
        loaderComponent = new ResourceLoaderComponent();
        loaderComponent.setResourceLoader(resourceLoader);
    }

    @Test
    public void getResource_shouldReturnRequestResource() {
        Resource resource = mock(Resource.class);
        when(resource.getFilename()).thenReturn("test-resource");
        when(resourceLoader.getResource(RESOURCE_PATH)).thenReturn(resource);

        Resource result = loaderComponent.getResource(RESOURCE_PATH);
        Assert.assertNotNull(result);
        Assert.assertEquals(result.getFilename(), "test-resource");
    }
}
