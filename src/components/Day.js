import React from 'react';
import { format } from 'url';
import moment from 'moment';
const Day = ({ day, children, today }) => {
  return (
    <div
      className={`cell ${today.format('LL') === day.format('LL') && 'today'}`}
    >
      <div className="label">{day.date()}</div>
      {children}
    </div>
  );
};

export default Day;
