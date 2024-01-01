import React from 'react';
import './InputText.css';

function InputText(props) {
  return (
    <div>
      <input type="text" {...props}/>
    </div>
      
  );
}

export default InputText;