import React, {useState} from 'react';
import './InputPassword.css';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

function InputPassword(props) {
  const [icon, setIcon] = useState(eye);
  const [type, setType] = useState('password');

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eyeOff);
       setType('text')
    } else {
       setIcon(eye)
       setType('password')
    }
  }

  return (
    <div>
      <input type={type} {...props}/>
      <button type="button" onClick={handleToggle}>
        <Icon icon={icon} size={25}/>
      </button>
    </div>
    
  );
}

export default InputPassword;

/**
 * Props:
 * Value
 * onChange
 * placeholder
 * id
 * name
 */