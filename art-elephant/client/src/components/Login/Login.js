import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Alert from './Alert';
import './Login.css';

// Event handlers update state in App.js
// App.js stores logged in user.
const Login = ({ email, password, submit, message, onChange, submitForm }) => {
    return (
        <div className='content'>
            <h1>Login</h1>
            
            <form>
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

                <p>Don't have an account?{" "}
                    <Link to="/new-user">Register here.</Link>
                </p>

                <button type="button" className="btn btn-outline-dark" onClick={submitForm} >Submit</button>
            </form>
            
            {/* Successful login will redirect user to My Account page.
                If login is not successful, a message will appear and indicate incorrect password or email not on file. */}
            <Route path="/login" render={ () => (
                submit ? <Redirect to="/my-account" /> 
                : <Alert submit={submit} message={message} /> 
            )} />

        </div>
    )
}

export default Login;