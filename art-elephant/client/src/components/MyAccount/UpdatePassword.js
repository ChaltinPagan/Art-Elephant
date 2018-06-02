import React, { Component } from 'react';
import axios from 'axios';
import Alert from '../Alert/Alert';

class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.user.id,
            password: "",
            submit: null,
            message: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    submitForm = () => {
        const { user_id, password } = this.state;
        if (password) {
            axios.put('users/update-pw', {
                id: user_id,
                password: password
            }).then( res => {
                this.setState({
                    submit: true,
                    message: res.data.message
                });
            }).catch( err => {
                console.log("Error updating password:", err);
                this.setState({
                    submit: false,
                    message: "Error updating passowrd."
                })
            })
        } else {
            this.setState({
                submit: false,
                message: "Password cannot be blank."
            })
        }
        
    }

    render(){
        const { password, submit, message } = this.state;
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="password">Enter New Password</label>
                    <input type="password" className="form-control" id="password" 
                        value={password} onChange={this.handleChange} />
                    <small id="passwordHelp" className="form-text text-muted">Passwords are case-sensitive.</small>
                </div>

                <button type="button" className="btn btn-outline-dark" onClick={this.submitForm} >
                    Update Password</button>

                <Alert submit={submit} message={message} />
            </form>
        )
    }
}

export default UpdatePassword;