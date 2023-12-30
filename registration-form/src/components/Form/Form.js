import React from 'react';
import './Form.css';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';
import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';


function Form() {
  return (
    <form>
      <Label htmlFor="first-name" value="First Name" />
      <InputText placeholder="First Name" id="first-name"/>

      <Label htmlFor="last-name" value="Last Name" />
      <InputText placeholder="Last Name" id="last-name"/>

      <Label htmlFor="email" value="Email" />
      <InputEmail placeholder="Email" id="email"/>

      <Label htmlFor="username" value="Username" />
      <InputText placeholder="Username" id="username"/>

      <Label htmlFor="password" value="Password" />
      <InputPassword placeholder="Password" id="password"/>

      <Label htmlFor="retype-password" value="Retype Password" />
      <InputPassword placeholder="Retype Password" id="retype-password"/>

    </form>
  );
}

export default Form;