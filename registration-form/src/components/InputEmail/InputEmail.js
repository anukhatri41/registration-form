import React from 'react';
import './InputEmail.css';

function InputEmail(props) {
  return (
      <input value={props.value} onChange={props.setValue} placeholder={props.placeholder} id={props.id} name={props.name} type="email" />
  );
}

export default InputEmail;