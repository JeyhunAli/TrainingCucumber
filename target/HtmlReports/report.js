$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "google search box functionality",
  "description": "",
  "id": "google-search;google-search-box-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user entered g00gle url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "check google image is displayed or no",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter to the search box I L0ve America",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on the search button or hit enter",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify you I Love America. That\u0027s Why I Have to Tell the Truth About It ... is in the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "00",
      "offset": 14
    }
  ],
  "location": "GoogleSearch.user_entered_g_gle_url(int)"
});
formatter.result({
  "duration": 2966473323,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.check_google_image_is_displayed_or_no()"
});
formatter.result({
  "duration": 42540118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 27
    }
  ],
  "location": "GoogleSearch.enter_to_the_search_box_I_L_ve_America(int)"
});
formatter.result({
  "duration": 3170667460,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.click_on_the_search_button_or_hit_enter()"
});
formatter.result({
  "duration": 13902,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_you_I_Love_America_That_s_Why_I_Have_to_Tell_the_Truth_About_It_is_in_the_page()"
});
formatter.result({
  "duration": 22281223,
  "status": "passed"
});
});