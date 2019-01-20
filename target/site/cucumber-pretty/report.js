$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFunctionality",
  "description": "this feature deals with loggin to the application",
  "id": "loginfunctionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login -- Verify Whether the user able to loggin to the application",
  "description": "",
  "id": "loginfunctionality;login----verify-whether-the-user-able-to-loggin-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@WorkInProgress"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I Navigate to the \"http://executeautomation.com/demosite/Login.html\" portal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Email"
      ],
      "line": 8
    },
    {
      "cells": [
        "Rajesh",
        "laisetti",
        "rlaisetti@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "anitha",
        "anusha",
        "ranitha@gmail.com"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I clicked on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the user logged into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the user logged from the application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://executeautomation.com/demosite/Login.html",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.java:23"
});
formatter.result({
  "duration": 2098077637,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.java:28"
});
formatter.result({
  "duration": 23571045,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.java:30"
});
formatter.result({
  "duration": 849488899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "into",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.java:37"
});
formatter.result({
  "duration": 9934636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "from",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.java:37"
});
formatter.result({
  "duration": 892373843,
  "status": "passed"
});
});