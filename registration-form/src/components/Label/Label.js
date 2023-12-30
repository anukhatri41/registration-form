import React from 'react';
import './Label.css';

function Label(props) {
  return (
    <label htmlFor={props.htmlFor}>{props.value}</label>
  );
}

export default Label;
