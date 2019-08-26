import React from 'react';
import Week from '../../components/Week';
import DayLabels from '../../components/DayLabels';
const MonthDisplay = ({ firstWeek, today, display }) => {
  return (
    <div className="container month">
      <DayLabels />
      <Week display={display} today={today} week={firstWeek} />
      <Week display={display} today={today} week={firstWeek + 1} />
      <Week display={display} today={today} week={firstWeek + 2} />
      <Week display={display} today={today} week={firstWeek + 3} />
      <Week display={display} today={today} week={firstWeek + 4} />
    </div>
  );
};

export default MonthDisplay;
