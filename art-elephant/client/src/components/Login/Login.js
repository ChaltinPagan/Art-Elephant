import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: "",
            submit: false
        };
    }

    handleChange = e => {
        console.log("email:", this.state.email);
        console.log("pw:", this.state.password);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const { email, password } = this.state;
    
        axios.post('/users', {
            email: email,
            password: password
          })
          .then(res => {
            console.log("login res:", res);
            if (res.status !== 200) {
              this.setState({ email: "", password: "", message: "Incorrect password." });
            } else {
              this.setState({ email: "", password: "", message: "Logged In.", submit: true });
            }
            
          })
          .catch(err => {
            console.log("error", err);
            this.setState({ email: "", password: "", message: "User does not exist." });
          });
      };

    render() {
        const { submit, message } = this.state;
        if (!submit) {
            return (
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.submitForm} >
                        <p>Email:</p>
                        <input type="text" name="email" onChange={this.handleChange} />
                        <p>Password:</p>
                        <input type="password" name="password" onChange={this.handleChange} />
                        <p>Don't have an account?{" "}
                            <Link to="/new-user">Register here.</Link>
                        </p>
                        <input type="submit" value="Submit" />
                        <p>{message}</p>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Login</h1>
                    <p>Welcome Back!</p>
                </div>
            )
        }

    }
}

export default Login;