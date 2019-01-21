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
        "laisetti",
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
  "location": "MyStepdefs.java:24"
});
formatter.result({
  "duration": 2907135102,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.java:29"
});
formatter.result({
  "duration": 19638306,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.java:31"
});
formatter.result({
  "duration": 515969854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "into",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.java:39"
});
formatter.result({
  "duration": 9943451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "from",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.java:39"
});
formatter.result({
  "duration": 788068987,
  "status": "passed"
});
});