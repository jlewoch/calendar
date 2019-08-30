import React from 'react';

const EventsList = ({ events = [] }) => {
  return (
    <div className="events">
      {events.map((event, idx) => (
        <Event event={event} />
      ))}
    </div>
  );
};

export default EventsList;
