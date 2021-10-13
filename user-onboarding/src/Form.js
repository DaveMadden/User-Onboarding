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
        console.log("onSubmit from Form.js", evt);
    }
    const onChange = evt => {
        console.log("onChange from Form.js", evt);
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label> First Name: 
                    <input 
                        value={values.fname}
                        onChange={onChange}
                        name="fname"
                        type="text"
                    />
                </label>
                <label> Last Name: 
                    <input 
                        value={values.lname}
                        onChange={onChange}
                        name="lname"
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
                <button disabled={disabled}>submit</button>
            </div>
        </form>
    )
}

