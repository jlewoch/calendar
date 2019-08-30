import React from 'react';
import Button from '../Button';
import moment from 'moment';
const MonthYearDisplay = ({ month, year, changeYear, changeMonth }) => {
  return (
    <div className="controls">
      <Button onClick={() => changeYear(-1)} text="prev year" />
      <Button onClick={() => changeMonth(-1)} text="prev month" />
      <h2 className="label">
        {moment()
          .month(month)
          .format('MMMM')}
        , {year}
      </h2>
      <Button onClick={() => changeMonth(1)} text="next month" />

      <Button onClick={() => changeYear(1)} text="next year" />
    </div>
  );
};

export default MonthYearDisplay;
