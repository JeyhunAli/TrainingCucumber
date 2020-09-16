$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hubspotLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "Hubspot Login",
  "description": "",
  "id": "hubspot-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Hubspot login with diffrent credentials",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I m entering hubspot url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verifying signUp link is there",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cusername\u003e\", and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 15,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;1"
    },
    {
      "cells": [
        "jeyhun",
        "",
        "success"
      ],
      "line": 16,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;2"
    },
    {
      "cells": [
        "Emiliya",
        "",
        "pass"
      ],
      "line": 17,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;3"
    },
    {
      "cells": [
        "Nastyush",
        "",
        "gelmishdun",
        ""
      ],
      "line": 18,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Hubspot login with diffrent credentials",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I m entering hubspot url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verifying signUp link is there",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter \"jeyhun\", and \"success\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "HubspotLogin.i_m_entering_hubspot_url()"
});
formatter.result({
  "duration": 7877074780,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "duration": 45736194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jeyhun",
      "offset": 12
    },
    {
      "val": "success",
      "offset": 26
    }
  ],
  "location": "HubspotLogin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 210728977,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 100229947,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Hubspot login with diffrent credentials",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I m entering hubspot url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verifying signUp link is there",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Emiliya\", and \"pass\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "HubspotLogin.i_m_entering_hubspot_url()"
});
formatter.result({
  "duration": 6498780873,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "duration": 29599896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emiliya",
      "offset": 12
    },
    {
      "val": "pass",
      "offset": 27
    }
  ],
  "location": "HubspotLogin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 154602915,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 95579185,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Hubspot login with diffrent credentials",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I m entering hubspot url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verifying signUp link is there",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Nastyush\", and \"gelmishdun\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "HubspotLogin.i_m_entering_hubspot_url()"
});
formatter.result({
  "duration": 6673022962,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "duration": 28376959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nastyush",
      "offset": 12
    },
    {
      "val": "gelmishdun",
      "offset": 28
    }
  ],
  "location": "HubspotLogin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 190791583,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 110424277,
  "status": "passed"
});
});