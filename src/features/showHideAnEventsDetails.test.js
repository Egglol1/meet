import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import EventList from '../components/EventList';
import React from 'react';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
    given('the app is rendered', () => {
      AppComponent = render(<App />);
    });

    when('the list of events is rendered', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event details are not shown', () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
  test('User can expand an event to see details', ({ given, when, then }) => {
    let AppComponent;
    given('event details are not shown', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    when('the user clicks the show details button', async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      const EventItems = within(EventListDOM).queryAllByRole('listitem');
      const EventComponent = EventItems[0];
      await user.click(within(EventComponent).queryByText('show details'));
      expect(EventComponent.querySelector('.details')).toBeInTheDocument();
    });

    then('the details section expands', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).toBeInTheDocument();
    });
  });
  test('User can collapse an event to hide details', ({
    given,
    when,
    then,
  }) => {
    let EventListComponent;
    let allEvents;
    given('the details are shown', async () => {
      const user = userEvent.setup();
      allEvents = await getEvents();
      EventListComponent = render(<EventList event={allEvents} />);
      const showDetails = EventListComponent.queryByText('Show details');
      await user.click(showDetails);
    });

    when('the user clicks the hide details button', async () => {
      const user = userEvent.setup();
      allEvents = await getEvents();
      EventListComponent = render(<EventList event={allEvents} />);
      const hideDetails = EventListComponent.queryByText('Hide details');
      await user.click(hideDetails);
    });

    then('the details section is minimized', async () => {
      let AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
