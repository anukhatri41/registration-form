import React, {useState} from 'react';
import './Form.css';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';
import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';


function Form() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    retype_password: ""
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <Label htmlFor="first_name" value="First Name" />
      <InputText placeholder="First Name" name="first_name" id="first_name" value={state.first_name} onChange={handleChange} />

      <Label htmlFor="last_name" value="Last Name" />
      <InputText placeholder="Last Name" name="last_name" id="last_name" value={state.last_name} onChange={handleChange} />

      <Label htmlFor="email" value="Email" />
      <InputEmail placeholder="Email" name="email" id="email" value={state.email} onChange={handleChange}/>

      <Label htmlFor="username" value="Username" />
      <InputText placeholder="Username" name="username" id="username" value={state.username} onChange={handleChange}/>

      <Label htmlFor="password" value="Password" />
      <InputPassword placeholder="Password" name="password" id="password" value={state.password} onChange={handleChange}/>

      <Label htmlFor="retype_password" value="Retype Password" />
      <InputPassword placeholder="Retype Password" name="retype_password" id="retype_password" onChange={handleChange} />


    </form>
  );
}

export default Form;

/*
/>

      
      */