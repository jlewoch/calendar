import React from 'react';
import Day from './Day';
import moment from 'moment';
import EventsList from './EventsList';
const days = [0, 1, 2, 3, 4, 5, 6];
const Week = ({ week, today, display }) => {
  return (
    <div className="container week">
      {days.map((day, idx) => (
        <Day
          key={idx}
          today={today}
          day={moment()
            .week(week)
            .day(day)}
          display={display}
        >
          <EventsList />
        </Day>
      ))}
    </div>
  );
};

export default Week;
