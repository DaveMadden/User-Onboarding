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

const inputChange = (name, value) => {
  console.log('input change: ', name, value); //PLACEHOLDER
}

const formSubmit = () => {
  console.log("form submit"); //PLACEHOLDER
}

function App() {
  const [users, setUsers] = useState(initialUsers); //array of users
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
