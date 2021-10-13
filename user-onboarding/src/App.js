import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./Form";
import axios from 'axios';
//import schema from SOMEWHERE
import * as yup from 'yup';

//---   INITIAL STATES   ---
const initialFormValues = {
  fname: "",
  lname: "",
  email: "",
  pwd: "",
  tos: false, //this is a checkbox
}
const initialFormErrors = {
  fname: "",
  lname: "",
  email: "",
  pwd: "",
  terms: "", //this is a checkbox that must be checked to submit
}

const initialUsers = [];
const initialDisabled = true;



function App() {
  const [users, setUsers] = useState(initialUsers); //array of users
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    console.log('input change: ', name, value); //PLACEHOLDER
    //VALIDATE HERE
    setFormValues({...formValues, [name]:[value]});
  }
  //HELPERS

  const getUsers = () => {
    console.log("getUsers");
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }



  //EVENT HANDLERS
  const formSubmit = () => {
    console.log("form submit"); //PLACEHOLDER
    const newUser = {
      fname: formValues.fname, //TRIM ERRORING OUT HERE
      lname: formValues.lname,
      email: formValues.email,
      pwd: formValues.pwd,
      tos: formValues.tos,
    }
    console.log(newUser);
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
    </div>
  );
}

export default App;
