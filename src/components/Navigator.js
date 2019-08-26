import React from 'react';

const Navigator = ({ display, navigationHandler }) => {
  return (
    <div className="container nav">
      <div className="container controls">
        <button onClick={() => navigationHandler(-1, 'year')}>prev year</button>
        <button onClick={() => navigationHandler(-1, 'month')}>
          prev month
        </button>
        <h2>
          {display.month}, {display.year}
        </h2>
        <button onClick={() => navigationHandler(1, 'month')}>
          next month
        </button>
        <button onClick={() => navigationHandler(1, 'year')}>next year</button>
      </div>
    </div>
  );
};

export default Navigator;
