import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import React from 'react';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test("When a user hasn't specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the app is loaded', () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    let EventListDOM;
    when('the event list is loaded', () => {
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
    });

    then('the default number of events shown is 32', async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test('User can change the number of events displayed', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the event list is loaded', () => {
      AppComponent = render(<App />);
    });

    when('the user changes the number from 32', async () => {
      const user = userEvent.setup();
      const numberTextBox = AppComponent.getByRole('spinbutton');
      await user.type(numberTextBox, '{backspace}{backspace}10');
      expect(numberTextBox).toHaveValue(10);
    });

    then('the number of events shown changes to match user input', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
