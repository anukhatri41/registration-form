import React from 'react';

function validateRegisterForm({state, setErrors}) {
   let formIsValid = true;
   let formErrors = {}
   // First Name
   if(!state.first_name){
    formIsValid = false;
    formErrors["firstNameErr"] = "First Name is required";
   }

   // Last Name
   if(!state.last_name){
    formIsValid = false;
    formErrors["lastNameErr"] = "Last Name is required";
   }

   // Email
   if(!state.email){
    formIsValid = false;
    formErrors["emailErr"] = "Email is required";
   } else if (!( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))){
    formIsValid = false;
    formErrors["emailErr"] = "Invalide email format";
   }

   // Username
   if(!state.username){
    formIsValid = false;
    formErrors["usernameErr"] = "Username is required";
   } else if (state.username.length < 8 ){
    formIsValid = false;
    formErrors["usernameErr"] = "Username must be at least 8 characters long"
   }

   // Password
   if(!state.password){
    formIsValid = false;
    formErrors["passwordErr"] = "Password is required";
   } else if (state.password.length < 8) {
    formIsValid = false;
    formErrors["passwordErr"] = "Password must be at least 8 characters long"
   } 

   // Confirm Password
   if(!state.confirm_password){
    formIsValid = false;
    formErrors["confirmPasswordErr"] = "Must confirm password";
   } else if (state.confirm_password !== state.password) {
    formIsValid = false;
    formErrors["confirmPasswordErr"] = "Passwords must match"
   }

   setErrors({form_errors: formErrors})

   return formIsValid;
}

export default validateRegisterForm;