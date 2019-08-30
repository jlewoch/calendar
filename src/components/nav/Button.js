import React from 'react';

const Button = ({ onClick, text, className, id, disabled = false }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
