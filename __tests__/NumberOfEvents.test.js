import { render } from '@testing-library/react';
import React from 'react';
import NumberOfEvents from '../src/components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let setCurrentNOE;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={[]} />
    );
  });
  test('contains an element with the role of textbox', () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default value of input field is 32', async () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
    expect(numberTextBox).toHaveValue(32);
  });
  test('value of input changes with user typing', async () => {
    const user = userEvent.setup();
    NumberOfEventsComponent.rerender(
      <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />
    );
    const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
    await user.type(numberTextBox, '{backspace}{backspace}10');
    expect(numberTextBox).toHaveValue(10);
  });
});
