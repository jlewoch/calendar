import React from 'react';

const DayLabels = () => {
  return (
    <div className="container">
      {[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ].map(day => (
        <div className="cell">
          <h6>{day}</h6>
        </div>
      ))}
    </div>
  );
};

export default DayLabels;
