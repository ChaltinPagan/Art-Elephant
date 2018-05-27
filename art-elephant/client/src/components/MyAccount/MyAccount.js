import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileContainer from './ProfileContainer';
import './MyAccount.css';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: 1,
            user: null,
            first_name: "",
            last_name: ""
        };
    }

    getUser = () => {
        const { user_id } = this.state
        axios.post(`/users/${user_id}`)
            .then( res => {
                let user = res.data.single_user[0];
                this.setState({
                    user: user,
                    first_name: user.first_name
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
        const { user, first_name } = this.state;
        console.log("user:", user)
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
                <div className='content'>
                    <h1>My Account</h1>
                    <p>user_id:{user.id ? user.id : " no user"}</p>

                    <div className="logout">
                        <Link className="btn btn-outline-dark" 
                            to="/login" 
                            role="button"
                            onClick={this.props.onClick} >Logout</Link>
                    </div>

                    <ProfileContainer 
                        user={user} 
                        first_name={first_name}
                        onChange={this.handleChange} 
                        submitForm={this.submitForm} />

                </div>
            )
        }
        
    }
}

export default MyAccount;