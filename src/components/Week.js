import React from 'react';
import Day from './Day';
import moment from 'moment';
import EventsList from './EventsList';
const days = [0, 1, 2, 3, 4, 5, 6];
const Week = ({ week, today }) => {
  return (
    <div className="container week">
      {days.map(day => (
        <Day
          today={today}
          day={moment()
            .week(week)
            .day(day)}
        >
          <EventsList />
        </Day>
      ))}
    </div>
  );
};

export default Week;
