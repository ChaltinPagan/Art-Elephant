import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            allUsers: [],
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            message: "",
            submit: null
        };
    }

    // componentDidMount() {
    //     axios.get('/users')
    //         .then(res => {
    //             this.setState({
    //                 allUsers: res.data.users
    //             });
    //         });
    // }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitForm = e => {
        e.preventDefault();
        // const { usernameInput, passwordInput } = this.state;

        // if (usernameInput < 3 || passwordInput.length < 6) {
        //   this.setState({
        //     message:  "Username must be at least 3 characters. Password length must be at least 6 characters."
        //   });
        //   return;
        // }
        const { first_name, last_name, email, password } = this.state;
        axios.post('/users/new', {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
            })
            .then(res => {
                console.log("new user:", res.data);
                this.setState({
                    message: "Welcome to Art Elephant!",
                    submit: true
                });
            })
            .catch(err => {
                console.log("error:", "Email already taken.");
                this.setState({
                    message: "Email already taken.",
                    submit: false
                });
            });
    };

    render() {
        const { first_name, last_name, email, password, message, submit } = this.state;
        console.log("submit:", submit)
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
                        <input type="email" className="form-control" id="last_name" 
                            value={last_name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" 
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

                <Route path="/new-user" render={ () => (
                    submit ? <Redirect to={{pathname: "/my-account", state: {email: email}}} /> 
                    : <Alert submit={submit} message={message} /> 
                )} />

            </div>
        )
    }
}

export default NewUser;