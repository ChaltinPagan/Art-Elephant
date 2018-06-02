import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileContainer from './ProfileContainer';
import './MyAccount.css';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.user,
            user: null
        };
    }

    getUser = () => {
        const { email } = this.state
        axios.post(`/users/${email}`)
            .then( res => {
                let user = res.data.single_user[0];
                this.setState({
                    user: user
                });
            })
    }

    componentDidMount = () => {
        this.getUser();
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render(){
        const { user } = this.state;
        if (!user) {
            return(
                <div>
                    <h1>My Account</h1>
                    <p>Please login to view your account.</p>
                    <div className="login">
                        <Link className="btn btn-outline-dark" to="/login" role="button">Login</Link>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='my-account'>
                    <h1>My Account</h1>
                    <p>email:{user.id ? user.id : " no user"}</p>

                    <div className="logout">
                        <Link className="btn btn-outline-dark" 
                            to="/login" 
                            role="button"
                            onClick={this.props.onClick} >Logout</Link>
                    </div>

                    <ProfileContainer 
                        user={user} 
                        onChange={this.handleChange} 
                        submitForm={this.submitForm} />

                </div>
            )
        }
        
    }
}

export default MyAccount;