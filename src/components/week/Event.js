import React from 'react';

const Event = ({ title, idx }) => {
  return (
    <div data={idx} className="event">
      {title}
    </div>
  );
};

export default Event;
