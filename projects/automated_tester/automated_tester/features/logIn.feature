Feature: Testing Log In Functionality

    Scenario: Log In with Valid Credentials
        Given Launching chrome browser
        When Open facebook.com
        And Enter userName "ashwin_rules@hotmail.com"
        And Enter password "3EfsshDicx3kDdh"
        And Click on Log In button
        Then User must successfully login to the facebook account
