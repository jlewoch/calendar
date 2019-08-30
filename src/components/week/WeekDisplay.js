import React from 'react';
import { Day } from '../Day';
import moment from 'moment';
import EventsList from './EventsList';
const WeekDisplay = ({ week, days, year }) => {
  return (
    <div className="container week">
      {days.map((day, idx) => (
        <Day
          key={idx}
          day={moment()
            .year(year)
            .week(week)
            .weekday(day)}
        >
          <EventsList />
        </Day>
      ))}
    </div>
  );
};

export default WeekDisplay;
