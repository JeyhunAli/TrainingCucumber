$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("herokuuApp.feature");
formatter.feature({
  "line": 1,
  "name": "the-internet.herokuapp.com;",
  "description": "",
  "id": "the-internet.herokuapp.com;",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "main page functionlaity;",
  "description": "",
  "id": "the-internet.herokuapp.com;;main-page-functionlaity;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigated to herokuu app;",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user on main page check Title;",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on A/B Testing",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user on A/B Testing page",
  "keyword": "And "
});
formatter.match({
  "location": "herokuuAppStepDef.user_navigated_to_herokuu_app()"
});
formatter.result({
  "duration": 2314419325,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.herokuuAppStepDef.user_navigated_to_herokuu_app(herokuuAppStepDef.java:28)\n\tat ✽.Given user navigated to herokuu app;(herokuuApp.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "herokuuAppStepDef.user_on_main_page_check_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "herokuuAppStepDef.user_clicks_on_A_B_Testing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "herokuuAppStepDef.user_on_A_B_Testing_page()"
});
formatter.result({
  "status": "skipped"
});
});