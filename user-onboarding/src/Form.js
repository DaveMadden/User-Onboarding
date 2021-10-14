import React from 'react';


export default function Form(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.pwd}</div>
                <div>{errors.tos}</div>
            </div>
            <div className="form-group inputs">
                <label> First Name: 
                    <input 
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"
                    />
                </label>
                <label> Last Name: 
                    <input 
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                    />
                </label>
                <label> Email: 
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label> Password: 
                    <input 
                        value={values.pwd}
                        onChange={onChange}
                        name="pwd"
                        type="password"
                    />
                </label>
                <label> Give away all your data: 
                    <input 
                        checked={values.tos}
                        onChange={onChange}
                        name="tos"
                        type="checkbox"
                    />
                </label>
            </div>
            <div className="form-group submit">
                <button id='submitBtn' disabled={disabled}>submit</button>
            </div>
        </form>
    )
}

