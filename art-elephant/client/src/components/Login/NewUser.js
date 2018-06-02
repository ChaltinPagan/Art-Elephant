import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Alert from '../Alert/Alert';

// Event handlers update state in App.js
// App.js stores new user as logged in.
const NewUser = ({ first_name, last_name, email, password, message, submit, onChange, submitForm }) => {
    return (
        <div className='content'>
            <h1>Create an Account</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" id="first_name" 
                        value={first_name} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" className="form-control" id="last_name" 
                        value={last_name} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" 
                        value={email} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" 
                        value={password} onChange={onChange} />
                </div>

                <p>Already have an account?{" "}
                    <Link to="/login">Login here.</Link>
                </p>

                <button type="button" className="btn btn-outline-dark" onClick={submitForm} >
                    Submit
                </button>
                
            </form>

            {/* Successful new user registration will redirect the user to the My Account page. 
                If an email is already on file, new user will see an alert that says email is taken.*/}
            <Route path="/new-user" render={ () => (
                submit ? <Redirect to="/my-account" /> 
                : <Alert submit={submit} message={message} /> 
            )} />

        </div>
    )
        
}

export default NewUser;