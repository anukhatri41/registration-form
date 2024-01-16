import React, {useState} from 'react';
import './RegisterForm.css';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';
import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';
import validateRegisterForm from '../../hooks/validateRegisterForm';


function RegisterForm() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    form_errors: {}
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let userExist = false;

    if(validateRegisterForm({state, setErrors})) {
      const userStore = window.localStorage.getItem("Users");
      let usersAll = [];
      if(userStore){
        usersAll = JSON.parse(userStore);
      }

      // Look up ES6 way to search
      /*for(let i = 0; i < usersAll.length; i++){
        const thisUser = usersAll[i];
        if (thisUser.email === state.email) {
            userExist = true;
            break;
        }
      }*/

      if (usersAll.some(user => user.email === state.email)){
        userExist = true;
      }

      if(!userExist){
        usersAll.push(state);
        window.localStorage.setItem("Users", JSON.stringify(usersAll));
        alert('You have been successfully registered');
        setState({
          first_name: "",
          last_name: "",
          email: "",
          username: "",
          password: "",
          confirm_password: ""
        });

      } else {
        alert("Email already exists");
        setState({
          ...state,
          email: ""
        });
      }

      
      // Make separate method to clear state
      /*setState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: ""
      });*/
    } else{
      return;
    }
  }
  
  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit} className='register-form' noValidate>
        <div>
          <Label htmlFor="first_name" value="First Name*" />
          <InputText className='input-text' placeholder="First Name" name="first_name" id="first_name" value={state.first_name} onChange={handleChange} />
          {errors.form_errors["firstNameErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["firstNameErr"]}</div>}    
        </div>
        
        <div>
          <Label htmlFor="last_name" value="Last Name*" />
          <InputText className='input-text' placeholder="Last Name" name="last_name" id="last_name" value={state.last_name} onChange={handleChange} />
          {errors.form_errors["lastNameErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["lastNameErr"]}</div>}    
        </div>
        
        <div>
          <Label htmlFor="email" value="Email*" />
          <InputEmail className='input-text' placeholder="Email" name="email" id="email" value={state.email} onChange={handleChange} />
          {errors.form_errors["emailErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["emailErr"]}</div>}    
        </div>
        
        <div>
          <Label htmlFor="username" value="Username*" />
          <InputText className='input-text' placeholder="Username" name="username" id="username" value={state.username} onChange={handleChange} />
          {errors.form_errors["usernameErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["usernameErr"]}</div>}    
        </div>
        
        <div>
          <Label htmlFor="password" value="Password*" />
          <InputPassword placeholder="Password" name="password" id="password" value={state.password} onChange={handleChange} />
          {errors.form_errors["passwordErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["passwordErr"]}</div>}    
        </div>
        
        <div>
          <Label htmlFor="confirm_password" value="Confirm Password*" />
          <InputPassword placeholder="Confirm Password" name="confirm_password" id="confirm_password" value={state.confirm_password}onChange={handleChange} />
          {errors.form_errors["confirmPasswordErr"] && <div style={{ color: "red", paddingBottom: 10 }}>{errors.form_errors["confirmPasswordErr"]}</div>}    
        </div>
        

        <button className='button-submit'type="submit">Submit</button>
      </form>
    </div>
    
  );
}

export default RegisterForm;

/*
/>

      
      */