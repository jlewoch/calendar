import React from 'react';

const EventsList = ({ events = ['hello'] }) => {
  return (
    <div className="events">
      {events.map(event => (
        <div className="event">{event}</div>
      ))}
    </div>
  );
};

export default EventsList;
