import React from 'react';
import PropTypes from 'prop-types';
import EventCard from './EventCard';
const EventsList = ({ events = [] }) => {
  return events.map((event, idx) => (
    <EventCard key={idx} idx={idx} {...event} />
  ));
};
EventsList.propTypes = { events: PropTypes.array.isRequired };

export default EventsList;
