package org.openmrs.module.spa.helpers;

import org.openmrs.api.AdministrationService;
import org.openmrs.api.context.Context;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.regex.Pattern;

import static org.openmrs.module.spa.utils.SpaModuleUtils.GLOBAL_PROPERTY_FRONTEND_WHITELIST_URLS;

public class VerifyUrl {

    @Autowired
    private AdministrationService service;
    public void setService(AdministrationService service) {
        this.service = service;
    }

    public String getWhitelistUrls() {
        return Context.getAdministrationService().getGlobalProperty(GLOBAL_PROPERTY_FRONTEND_WHITELIST_URLS);
    }

    public boolean validateClientUrl(String clientUrl) {
        if ((performRegexTest(clientUrl) == true) || (performStringTest(clientUrl) == true)) {return true;}
        return false;
    }

    public boolean performRegexTest(String clientUrl) {
        String[] urls = splitUrl(getWhitelistUrls());

        for (String s : urls) {
            if (Pattern.compile(s).matcher(clientUrl).matches()) {
                return true;
            }
        }

        return false;
    }
    public String debugCustom(){
        return getWhitelistUrls();
    }
    public boolean performStringTest(String clientUrl) {
        String[] whiteListStringUrl = splitUrl(getWhitelistUrls());

        for (String s : whiteListStringUrl) {
            if (s.equalsIgnoreCase(cleanInput(clientUrl))) {
                return true;
            }
        }
        return false;
    }

    public String cleanInput(String clientUrl) {
        try {
            String CleanUrl = clientUrl.substring(0, clientUrl.indexOf('*'));
            return CleanUrl;
        } catch (Exception e) {
            return clientUrl;
        }
    }

    public String[] splitUrl(String url) {
        String[] splitName = url.split(",");
        return splitName;
    }

}