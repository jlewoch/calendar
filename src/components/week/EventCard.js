import React from 'react';
import moment from 'moment';
const EventCard = ({ title, startDate, endDate, idx }) => {
  return (
    <div
      data={idx}
      className="event"
      style={{
        gridColumn:
          endDate != startDate
            ? `${moment(startDate).day() + 1}/${moment(endDate).day() + 2}`
            : `${moment(startDate).day() + 1}`
      }}
    >
      {title}
    </div>
  );
};

export default EventCard;
