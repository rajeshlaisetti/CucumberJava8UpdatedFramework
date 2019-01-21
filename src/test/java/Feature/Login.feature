Feature: LoginFunctionality
  this feature deals with loggin to the application
  @WorkInProgress
  Scenario: Login -- Verify Whether the user able to loggin to the application
    Given I Navigate to the "http://executeautomation.com/demosite/Login.html" portal
    And I enter the username and password
      | username | password | Email               |
      | Rajesh   | laisetti | rlaisetti@gmail.com |
      | anitha   | laisetti | ranitha@gmail.com   |
    And I clicked on submit button
    Then I verify the user logged into the application
    And I verify the user logged from the application
