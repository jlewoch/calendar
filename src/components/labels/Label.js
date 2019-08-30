import React from 'react';

const Label = ({ text }) => {
  return (
    <div className="cell">
      <h6 className="label">{text}</h6>
    </div>
  );
};

export default Label;
