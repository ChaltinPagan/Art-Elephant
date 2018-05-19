import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: "",
            submit: null
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const { email, password } = this.state;

        axios.post('/users', {
            email: email.toLowerCase(),
            password: password
        })
            .then(res => {
                console.log("login res:", res);
                if (res.status !== 200) {
                    this.setState({ email: "", password: "", message: "Incorrect password.", submit: false });
                } else {
                    this.setState({ email: "", password: "", message: "Welcome Back!", submit: true });
                }

            })
            .catch(err => {
                console.log("error:", "User does not exist.");
                this.setState({ email: "", password: "", message: "User does not exist.", submit: false });
            });
    };

    render() {
        const { submit, message } = this.state;
        // if (!submit) {
            return (
                <div>
                    <h1>Login</h1>
                    <form>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" onChange={this.handleChange} />
                            
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" onChange={this.handleChange} />
                            <p>Don't have an account?{" "}
                                <Link to="/new-user">Register here.</Link>
                            </p>
                            {/* <input type="submit" value="Submit" /> */}
                            <Button onClick={this.submitForm} >Submit</Button>
                            {/* <p>{message}</p> */}
                            <div>
                                {submit ? 
                                    <Alert bsStyle="success">
                                        <p>{message}</p>
                                    </Alert> : (submit === false) ?
                                    <Alert bsStyle="danger">
                                        <p>{message}</p>
                                    </Alert> : ""
                                }
                            </div>
                        </FormGroup>
                    </form>
                </div>
            )
        // } else {
        //     return (
        //         <div>
        //             <h1>Login</h1>
        //             {/* <p>Welcome Back!</p> */}
        //             <Alert bsStyle="success">
        //                 <p>Welcome Back!</p>
        //             </Alert>
        //         </div>
        //     )
        // }

    }
}

export default Login;