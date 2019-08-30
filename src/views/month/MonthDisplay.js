import React from 'react';
import { Week } from '../../components/Week';
import TopLabels from '../../components/labels/TopLabels';
import DayDisplay from '../../components/Day/DayDisplay';
import moment from 'moment';
const MonthDisplay = ({ firstWeek, weeks, days }) => {
  const weeksArr = new Array(weeks).fill();
  return (
    <div className="container with-header">
      <TopLabels
        dataArr={days.map(i =>
          moment()
            .day(i)
            .format('dddd')
        )}
      />

      <div className="container month">
        {weeksArr.map((weekNum, idx) => (
          <Week key={idx} week={firstWeek + idx} />
        ))}
      </div>
    </div>
  );
};

export default MonthDisplay;
