import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button id={props.id} disabled={props.disabled} onClick={props.onClick}>{props.buttonText}</button>
  );
}

export default Button;