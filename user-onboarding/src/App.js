import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./Form";
import axios from 'axios';
import schema from './validation/formSchema';
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
  //STATE
  const [users, setUsers] = useState(initialUsers); //array of users
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //HELPERS

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res=>{
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        // console.log(res.data);
        setUsers([res.data, ...users]);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  //EVENT HANDLERS
  const inputChange = (name, value) => {
    console.log('input change: ', name, value); //PLACEHOLDER
    validate(name, value);
    setFormValues({...formValues, [name]:[value]});
  }

  const formSubmit = () => {
    // console.log("form submit"); //PLACEHOLDER
    const newUser = { //NEED TO CHANGE THESE KEYS TO MATCH API????
      fname: formValues.fname, //TRIM ERRORING OUT HERE
      lname: formValues.lname,
      email: formValues.email,
      pwd: formValues.pwd,
      tos: formValues.tos,
    }
    console.log(newUser);
    postNewUser(newUser);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]:''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

//SIDE EFFECTS = these are a trip

useEffect(() => {
  getUsers()
}, []);

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues]);

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
