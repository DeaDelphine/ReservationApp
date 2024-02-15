/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function AvailabilityCalendar() {
  const [buttonColor, setButtonColor] = useState('green');
  const initialColor = 'green';
  const handleClick = () => {
    const changeColor = buttonColor === 'green' ? 'blue' : initialColor;
    setButtonColor(changeColor);
  }
  return (
    <div>
      <div>AvailabilityCalendar</div>
      <button style={{backgroundColor: buttonColor}} onClick={handleClick}>Change Color</button>
    </div>
  )
}

export default AvailabilityCalendar