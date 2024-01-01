import React from 'react';
import './Label.css';

function Label(props) {
  return (
    <label {...props}>{props.value}</label>
  );
}

export default Label;
