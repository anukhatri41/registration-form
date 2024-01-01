import React from 'react';
import './InputEmail.css';

function InputEmail(props) {
  return (
    <div>
      <input type="email" {...props}/>
    </div>
      
  );
}

export default InputEmail;