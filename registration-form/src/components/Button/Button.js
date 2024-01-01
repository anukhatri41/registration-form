import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button {...props}>{props.buttonText}</button>
  );
}

export default Button;

/**
 * Props:
 * id
 * buttonText
 * disabled
 * onClick
 */