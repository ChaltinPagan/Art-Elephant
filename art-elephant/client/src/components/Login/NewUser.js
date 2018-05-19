import React, { Component } from 'react';
import { Alert, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
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
            [e.target.name]: e.target.value
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
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    message: "Welcome to Art Elephant!",
                    submit: true
                });
            })
            .catch(err => {
                console.log("error:", "Error inserting user. Email already taken.");
                this.setState({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    message: "Error inserting user. Email already taken.",
                    submit: false
                });
            });
    };

    render() {
        const { first_name, last_name, email, password, message, submit } = this.state;
        console.log("new user submit:", submit);
        // if (!submit) {
            return (
                <div>
                    <h1>Create an Account</h1>
                    <form>
                        <FormGroup>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl type="text" name="first_name" value={first_name} onChange={this.handleChange} />
                            
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl type="text" name="last_name" value={last_name} onChange={this.handleChange} />

                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" value={email} onChange={this.handleChange} />
                            
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" value={password} onChange={this.handleChange} />
                            
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
        //     return(
        //         <div>
        //             <h1>Create an Account</h1>
        //             <p>Welcome to Art Elephant!</p>
        //         </div>
        //     )
        // }

    }
}

export default NewUser;