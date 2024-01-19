import React from 'react';
import './InputTextLogin.css';

function InputTextLogin(props) {
  return (
    <div>
      <input type="text" className={props.className} ref={props.innerRef} onChange={props.onChange} placeholder={props.placeholder} id={props.id} name={props.name}/>
    </div>
      
  );
}

export default InputTextLogin;