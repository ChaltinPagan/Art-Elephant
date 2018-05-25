import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';
import './MyAccount.css';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.email,
            user: null,
            first_name: "",
            last_name: ""
        };
    }

    getUser = () => {
        const { email } = this.state
        axios.post(`/users/${email}`)
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
        const { email, user, first_name } = this.state;
        console.log("user:", user)
        console.log("fn:", first_name)
        console.log("email;", email)
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
                    <p>email:{email ? email : "no props"}</p>
                    <p>user:{user.id ? user.id : " no user"}</p>

                    <div className="logout">
                        <Link className="btn btn-outline-dark" 
                            to="/login" 
                            role="button"
                            onClick={this.props.onClick} >Logout</Link>
                    </div>

                    <div id="accordion" className="my-account">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-outline-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        My Profile
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <UserProfile user={user} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Artist Profile
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    Artist form goes here
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Contact
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Contact here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
        
    }
}

export default MyAccount;