// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('first name is required'),
    last_name: yup
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
    tos: yup
        .boolean()
        .oneOf([true], "give me the data, bro"), //how to make an error for a checkbox not submitted?
});

export default formSchema;