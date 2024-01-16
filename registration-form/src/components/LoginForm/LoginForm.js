import React, {useRef, useState} from 'react';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';
import InputPassword from '../InputPassword/InputPassword';
//import Button from '../Button/Button';


function LoginForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();
  
  return (
    <div className='login-container'>
        <form>
            <div>
                <Label htmlFor="username" value="Username*" />
                <InputText className='input-text' placeholder="Username" name="username" id="username" ref={usernameRef}/>
            </div>
            <div>
                <Label htmlFor="password" value="Password*" />
                <InputPassword placeholder="Password" name="password" id="password" ref={passwordRef}/>
            </div>
            <div>
                <button className='button-submit'type="submit">Submit</button>
            </div>
        </form>
        
    </div>
    
  );
}

export default LoginForm;