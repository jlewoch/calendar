import React from 'react';

const MenuItem = ({ label, click, disabled = false, first, last, target }) => {
  return (
    <div
      onClick={click}
      className={`option ${first ? 'first' : ''} ${last ? 'last' : ''}`}
      disabled={disabled}
    >
      {label}
    </div>
  );
};

export default MenuItem;
