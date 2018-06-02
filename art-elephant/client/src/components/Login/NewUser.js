import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Alert/Alert';

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            message: "",
            submit: null
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitForm = e => {
        e.preventDefault();

        const { first_name, last_name, email, password, message } = this.state;

        axios.post('/users/new', {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
            })
            .then(res => {
                this.setState({
                    message: "Welcome to Art Elephant!",
                    submit: true
                });
            })
            .catch(err => {
                console.log(`Error: ${message}`);
                this.setState({
                    message: "Email already taken.",
                    submit: false
                });
            });
    };

    render() {
        const { first_name, last_name, email, password, message, submit } = this.state;
        return (
            <div className='content'>
                <h1>Create an Account</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className="form-control" id="first_name" 
                            value={first_name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" 
                            value={last_name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" 
                            value={email} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" 
                            value={password} onChange={this.handleChange} />
                    </div>

                    <p>Already have an account?{" "}
                        <Link to="/login">Login here.</Link>
                    </p>

                    <button type="button" className="btn btn-outline-dark" onClick={this.submitForm} >
                        Submit
                    </button>
                    
                </form>

                {/* Successful new user registration will redirect the user to the My Account page. 
                    If an email is already on file, new user will see an alert that says email is taken.*/}
                <Route path="/new-user" render={ () => (
                    submit ? <Redirect to={{pathname: "/my-account", state: {user: email}}} /> 
                    : <Alert submit={submit} message={message} /> 
                )} />

            </div>
        )
    }
}

export default NewUser;