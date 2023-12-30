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
      <InputText placeholder="First Name" name="first_name" id="first_name" value={state.first_name} setValue={handleChange }/>

      <Label htmlFor="last_name" value="Last Name" />
      <InputText placeholder="Last Name" name="last_name" id="last_name" value={state.last_name}/>

      <Label htmlFor="email" value="Email" />
      <InputEmail placeholder="Email" name="email" id="email" value={state.email}/>

      <Label htmlFor="username" value="Username" />
      <InputText placeholder="Username" name="username" id="username" value={state.username}/>

      <Label htmlFor="password" value="Password" />
      <InputPassword placeholder="Password" id="password"/>

      <Label htmlFor="retype_password" value="Retype Password" />
      <InputPassword placeholder="Retype Password" id="retype_password"/>

    </form>
  );
}

export default Form;