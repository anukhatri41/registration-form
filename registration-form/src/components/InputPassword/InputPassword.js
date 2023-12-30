import React from 'react';
import './InputPassword.css';

function InputPassword(props) {
  return (
    <input value={props.value} onChange={props.setValue} placeholder={props.placeholder} id={props.id} name={props.name} type="password" />
  );
}

export default InputPassword;