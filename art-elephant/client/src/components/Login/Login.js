import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            [e.target.id]: e.target.value
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
                    this.setState({ message: "Incorrect password.", submit: false });
                } else {
                    this.setState({ message: "Welcome Back!", submit: true });
                }

            })
            .catch(err => {
                console.log("error:", "User does not exist.");
                this.setState({ message: "User does not exist.", submit: false });
            });
    };

    render() {
        const { email, password, submit, message } = this.state;
        // if (!submit) {
            return (
                <div className='content'>
                    <h1>Login</h1>
                    
                    <form>
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

                        <p>Don't have an account?{" "}
                            <Link to="/new-user">Register here.</Link>
                        </p>

                        <button type="button" className="btn btn-outline-dark" onClick={this.submitForm} >Submit</button>
                    </form>

                    <div>
                        {submit ? 
                            <div className="alert alert-success" role="alert">
                                <p>{message}</p>
                            </div> : (submit === false) ?
                            <div className="alert alert-danger" role="alert">
                                <p>{message}</p>
                            </div> : ""
                        }
                    </div>
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