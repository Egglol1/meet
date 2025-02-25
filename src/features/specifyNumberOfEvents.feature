Feature: Specify Number of Events
  Scenario: When a user hasn't specified a number, 32 events are shown by default
    Given the app is loaded
    When the event list is loaded
    Then the default number of events shown is 32
  Scenario: User can change the number of events displayed
    Given the event list is loaded
    When the user changes the number from 32
    Then the number of events shown changes to match user input