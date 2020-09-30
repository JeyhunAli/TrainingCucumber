$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hubspotLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:"
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
  "line": 11,
  "name": "",
  "description": "",
  "id": "hubspot-login;hubspot-login-with-diffrent-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        ""
      ],
      "line": 12,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;1"
    },
    {
      "cells": [
        "jeyhun",
        "",
        "success",
        ""
      ],
      "line": 13,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;2"
    },
    {
      "cells": [
        "Emiliya",
        "",
        "pass",
        ""
      ],
      "line": 14,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;3"
    },
    {
      "cells": [
        "Nastyush",
        "",
        "gelmishdun",
        ""
      ],
      "line": 15,
      "id": "hubspot-login;hubspot-login-with-diffrent-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
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
  "duration": 7534869949,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "duration": 37311715,
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
  "duration": 166238249,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 96923499,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "duration": 6094329466,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "duration": 29377588,
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
  "duration": 171805637,
  "status": "passed"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 99405149,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "duration": 12148979573,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for title to contain \"HubSpot Login\". Current title: \"\" (tried for 6 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat Utilities.ElementUtility.waitForContainsTitleToBePresent(ElementUtility.java:421)\n\tat stepDefinition.HubspotLogin.i_m_entering_hubspot_url(HubspotLogin.java:27)\n\tat ✽.Given I m entering hubspot url(hubspotLogin.feature:6)\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027Jeys-MBP.home\u0027, ip: \u0027fe80:0:0:0:1c29:c4d0:c7dc:5413%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/p0/h72mllqx00q...}, goog:chromeOptions: {debuggerAddress: localhost:62797}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a38937bfb7949f5382caec16ebb70a61\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:277)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:87)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\tat Utilities.ElementUtility.waitForContainsTitleToBePresent(ElementUtility.java:421)\n\tat stepDefinition.HubspotLogin.i_m_entering_hubspot_url(HubspotLogin.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat Runner.MyRunner2.feature(MyRunner2.java:36)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.match({
  "location": "HubspotLogin.verifying_signUp_link_is_there()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "HubspotLogin.user_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
});