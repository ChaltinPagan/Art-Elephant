import React, { Component } from 'react';
import axios from 'axios';
import Alert from './Alert';

class MyContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.user.id,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            email: this.props.user.email,
            submit: null,
            message: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = () => {
        const { id, first_name, last_name, email } = this.state;
        axios.put('users/update', {
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase()
        }).then( res => {
            console.log("update res:", res);
            this.setState({
                submit: true,
                message: res.data.message
            })
        }).catch( err => {
            console.log("Error updating user:", err);
            this.setState({
                submit: false,
                message: "Error updating user."
            })
        })
        
    }

    render() {
        const { first_name, last_name, email, submit, message } = this.state;
        return (
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

                <button type="button" className="btn btn-outline-dark" onClick={this.handleSubmit} >Update Profile</button>

                <Alert submit={submit} message={message} />
            
            </form>
        )
    }
};

export default MyContact;