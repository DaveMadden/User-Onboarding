// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required('first name is required'),
    lname: yup
        .string()
        .trim()
        .required('last name is required'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    pwd: yup
        .string()
        .min(6, 'password must be at least 6 chars')
        .required('dude you need a password'),
    tos: yup.boolean(), //how to make an error for a checkbox not submitted?
});

export default formSchema;