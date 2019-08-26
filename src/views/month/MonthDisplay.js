import React from 'react';
import Week from '../../components/Week';
import DayLabels from '../../components/DayLabels';
const MonthDisplay = ({ firstWeek, today }) => {
  return (
    <div className="container month">
      <DayLabels />
      <Week today={today} week={firstWeek} />
      <Week today={today} week={firstWeek + 1} />
      <Week today={today} week={firstWeek + 2} />
      <Week today={today} week={firstWeek + 3} />
      <Week today={today} week={firstWeek + 4} />
    </div>
  );
};

export default MonthDisplay;
