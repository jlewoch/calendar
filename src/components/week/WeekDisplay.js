import React from 'react';
import { Day } from '../Day';
import moment from 'moment';
import EventsList from './EventsList';
import { sortEvents } from '../../helpers/events';
const WeekDisplay = ({ week, days, year, events }) => {
  const getLength = evt =>
    moment(evt.endDate).diff(moment(evt.startDate), 'days');

  return (
    <div className="container with-header">
      <div className="container week">
        {days.map((day, idx) => (
          <div key={idx} className="label bb bl">
            {moment()
              .year(year)
              .week(week)
              .weekday(day)
              .date()}
          </div>
        ))}
      </div>
      <div className="container week events">
        <EventsList events={sortEvents({ events, year, week })} />
      </div>
    </div>
  );
};

export default WeekDisplay;
