import React from 'react';

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const secondaryButtonStyles = {
  backgroundColor: '#e74c3c',
};

const Button = ({ onClick, secondary, children }) => {
  const combinedStyles = { ...buttonStyles, ...(secondary && secondaryButtonStyles) };

  return (
    <button style={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export {Button};
