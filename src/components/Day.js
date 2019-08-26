import React from 'react';

/* 
  1. day is an instance of moment for specific day
  2. 
  3. children is the list of events
*/
const Day = ({ day, children, today }) => {
  return (
    <div className={`cell ${today === day.format('LL') && 'today'}`}>
      <div className="label">{day.date()}</div>
      {children}
    </div>
  );
};

export default Day;
