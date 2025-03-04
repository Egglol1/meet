import React, { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);

    setNumber(value);
    setCurrentNOE(value);

    let errorText;
    if (value <= 0) {
      errorText = 'Please only use positive integers in this search field.';
    } else {
      errorText = '';
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="number"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
