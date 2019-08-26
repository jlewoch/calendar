import React from 'react';

const EventsList = ({ events = [] }) => {
  return (
    <div className="events">
      {events.map((event, idx) => (
        <div key={idx} className="event">
          {event}
        </div>
      ))}
    </div>
  );
};

export default EventsList;
