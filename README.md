# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

..........

# Project Requirements

# Key Features:

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

# Technical Requirements:

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app's code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse's PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.

..........

# User Stories

# 2: Show/Hide Event Details

- As a user,
- I should be able to show and hide event details,
- So that I can learn when events are taking place and what they are about.

# 3: Specify Number of Events

- As a user,
- I should be able to specify the number of events,
- So that I can see as many or as few events as I need.

# 4: Use the App When Offline

- As a user,
- I should be able to use the app offline,
- So that I can find events in my preferred cities even in areas with poor internet access.

# 5: Add an App Shortcut to the Home Screen

- As a user,
- I should be able to add an app shortcut to the home screen,
- So that I can access Meet easily and whenever I wish.

# 6: Display Charts Visualizing Event Details

- As a user,
- I should be able to display charts visualizing event details,
- So that I can better understand the location and popularity of events.

..........

# Gherkin Scenarios

# 2: Scenario 1

- Scenario: An event element is collapsed by default.
- Given: the user loads the app
- When: the list of events is loading
- Then: the event element will be collapsed

# 2: Scenario 2

- Scenario: User can expand an event to see details.
- Given: the list of events has been loaded
- When: user clicks on "show details" button for an event
- Then: the event element will be expanded to show the event details

# 2: Scenario 3

- Scenario: User can collapse an event to hide details.
- Given: an event is expanded
- When: user clicks on "hide details" button for an event
- Then: the event element will collapse to hide the event details

..........

# 3: Scenario 1

- Scenario: When user hasn’t specified a number, 32 events are shown by default.
- Given: the full list of events is loaded
- When: the user does not speciy how many events to see
- Then: list 32 events by default

# 3: Scenario 2

- Scenario: User can change the number of events displayed.
- Given: the full list of events is loaded
- When: the user types a number into "number of events" text box
- Then: that number of events is dispayed

..........

# 4: Scenario 1

- Scenario: Show cached data when there’s no internet connection.
- Given: the app has cached a list of data
- When: the user's device is not connected to the internet
- Then: display cached data to the user

# 4: Scenario 2

- Scenario: Show error when user changes search settings (city, number of events).
- Given: the user's device is not connected to the internet
- When: the user changes the settings in either search box
- Then: return an error stating the app is not connected to the internet

..........

# 5: Scenario 1

- Scenario: User can install the meet app as a shortcut on their device home screen.
- Given: the user does not already have an instance of the meet app
- When: the user installs the meet app to their device
- Then: the shortcut is added to the device's home screen

..........

# 6 Scenario 1

- Scenario: Show a chart with the number of upcoming events in each city.
- Given: the user has input a city into the "choose your nearest city" text box
- When: the details about events in that city are loaded
- Then: those events will be consolidated into a chart of upcoming events
