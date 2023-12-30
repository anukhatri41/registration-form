import React from 'react';
import './InputText.css';

function InputText(props) {
  return (
      <input value={props.value} onChange={props.setValue} placeholder={props.placeholder} id={props.id} name={props.name} type="text" />
  );
}

export default InputText;