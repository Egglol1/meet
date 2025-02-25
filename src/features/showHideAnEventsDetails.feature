Feature: Show/Hide event details
  Scenario: An event element is collapsed by default
    Given the app is rendered
    When the list of events is rendered
    Then the event details are not shown
  Scenario: User can expand an event to see details
    Given event details are not shown
    When the user clicks the show details button
    Then the details section expands
  Scenario: User can collapse an event to hide details
    Given the details are shown
    When the user clicks the hide details button
    Then the details section is minimized