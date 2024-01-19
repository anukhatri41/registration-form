import React, {useState} from 'react';
import './InputPasswordLogin.css';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

function InputPasswordLogin(props) {
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
    <div className='password-container'>
      <input className='input-password' ref={props.innerRef} type={type} onChange={props.onChange} placeholder={props.placeholder} id={props.id} name={props.name}/>
      <button className='button-eye'type="button" onClick={handleToggle}>
        <Icon icon={icon} size={25}/>
      </button>
    </div>
    
  );
}

export default InputPasswordLogin;

/**
 * Props:
 * Value
 * onChange
 * placeholder
 * id
 * name
 */