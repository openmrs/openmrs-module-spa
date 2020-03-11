package org.openmrs.module.spa.helpers;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.openmrs.api.AdministrationService;
import org.openmrs.test.BaseContextMockTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)

public class VerifyUrlTest extends BaseContextMockTest {
	private static String WHITELIST_PROPERTY = "spa.frontend.whiteList";
	private static String TEST_URLS = "^(htt(p|ps)://)?(www.)?A?a?mpath.com(/d[0-9]/[a-zA-Z]*)?,www.kimosabe.com,//ampath-poc-test.fra1.digitaloceanspaces.com/import-map.json";
	@Mock
	private AdministrationService service;

	private VerifyUrl verifyUrlInit;

	@Before
	public void setup() {
		verifyUrlInit = new VerifyUrl();
		verifyUrlInit.setService(service);
	}
	@Test
	public void testGetWhitelistUrls() throws Exception {
		when(service.getGlobalProperty(WHITELIST_PROPERTY)).thenReturn(TEST_URLS);
		String value = verifyUrlInit.getWhitelistUrls();
		assertThat(value, equalTo(TEST_URLS));
	}

	 @Test
	 public void testRegexTest() throws Exception {
		 when(service.getGlobalProperty(WHITELIST_PROPERTY)).thenReturn(TEST_URLS);
		 final boolean actual = verifyUrlInit.performRegexTest("www.ampath.com");
		 Assert.assertTrue(actual);
	 }

	@Test
	public void testStringTest() throws Exception {
		when(service.getGlobalProperty(WHITELIST_PROPERTY)).thenReturn(TEST_URLS);
		final boolean actual = verifyUrlInit.performStringTest("www.kimosabe.com");
		assertThat(actual,equalTo(true));
	}

	 @Test
	 public void testSplitUrl() throws Exception {
	 final String obj = "www.ampath.com,www.kimosabi.com";
	 final String[] output = verifyUrlInit.splitUrl(obj);
	 assertThat(output.length,equalTo(2));
	 }
}