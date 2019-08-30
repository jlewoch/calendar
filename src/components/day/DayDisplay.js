import React from 'react';

const DayDisplay = ({ day, children, today }) => {
  return (
    <div className={`cell ${today === day.format('LL') && 'today'}`}>
      <div className="label">{day.date()}</div>
      {children}
    </div>
  );
};

export default DayDisplay;
