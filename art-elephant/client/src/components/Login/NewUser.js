import React, { Component } from 'react';
import axios from 'axios';

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
            submit: false
        };
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                this.setState({
                    allUsers: res.data.users
                });
            });
    }

    handleChange = e => {
        console.log(this.state);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

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
        }).then(res => {
                console.log("new:", res.data);
                this.setState({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    submit: true
                });
            })
            .catch(err => {
                console.log("error: ", err);
                this.setState({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    message: "Error inserting user. Email already taken."
                });
            });
    };

    render() {
        const { message, submit } = this.state;
        console.log("submit:", submit);
        if (!submit) {
            return (
                <div>
                    <h1>Create an Account</h1>
                    <form onSubmit={this.submitForm} >
                        <p>First Name:</p>
                        <input type="text" name="first_name" onChange={this.handleChange} />
                        <p>Last Name:</p>
                        <input type="text" name="last_name" onChange={this.handleChange} />
                        <p>Email:</p>
                        <input type="text" name="email" onChange={this.handleChange} />
                        <p>Password:</p>
                        <input type="password" name="password" onChange={this.handleChange} />
                        <br />
                        <input type="submit" value="Submit" />
                        <p>{message}</p>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>Create an Account</h1>
                    <p>Welcome to Art Elephant!</p>
                </div>
            )
        }

    }
}

export default NewUser;