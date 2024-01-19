import React, {useRef, useState} from 'react';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';
import InputPassword from '../InputPassword/InputPassword';
import InputPasswordLogin from '../InputPasswordLogin/InputPasswordLogin';
import InputTextLogin from '../InputTextLogin/InputTextLogin';
//import Button from '../Button/Button';


function LoginForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let userFound = false;

        const userStore = window.localStorage.getItem("Users");
        let usersAll = [];
        let user;
        if(userStore){
            usersAll = JSON.parse(userStore);
            console.log(usersAll);
            console.log("Username" + usernameRef.current.value);
            user = usersAll.find(x => (x.username === usernameRef.current.value && x.password === passwordRef.current.value));
        }

        
        if (user){
            userFound = true;
            setIsLoggedIn(true);
            alert("Successful login");
            
        } else {
            alert ("Username or password invalid");
            usernameRef.current.value = '';
            passwordRef.current.value = '';
        }

    }

  
    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="username" value="Username*" />
                    <InputTextLogin className='input-text' placeholder="Username" name="username" id="username" innerRef={usernameRef}/>
                </div>
                <div>
                    <Label htmlFor="password" value="Password*" />
                    <InputPasswordLogin placeholder="Password" name="password" id="password" innerRef={passwordRef}/>
                </div>
                <div>
                    <button className='button-submit'type="submit">Submit</button>
                </div>
            </form> 
        </div>
    );
}

export default LoginForm;