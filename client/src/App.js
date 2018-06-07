import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Registry from './components/Registry/Registry';
import Opportunities from './components/Opportunities/Opportunities';
import Login from './components/Login/Login';
import NewUser from './components/Login/NewUser';
import MyAccount from './components/MyAccount/MyAccount';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      first_name: "",
      last_name: "",
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

  submitLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post('/users', {
      email: email.toLowerCase(),
      password: password
    })
      .then(res => {
        if (res.status !== 200) {
          this.setState({ user: res.data.user, message: "Incorrect password.", submit: false });
        } else {
          this.setState({ user: res.data.user, password: "", message: "Welcome Back!", submit: true });
        }

      })
      .catch(err => {
        console.log("error:", "Email not not file. User does not exist.");
        this.setState({ message: "Email not not file. User does not exist.", submit: false });
      });
  };

  submitNewUser = e => {
    e.preventDefault();

    const { first_name, last_name, email, password, message } = this.state;

    axios.post('/users/new', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
      .then(res => {
        this.setState({
          message: "Welcome to Art Elephant!",
          submit: true
        });
      })
      .catch(err => {
        console.log(`Error: ${message}`);
        this.setState({
          message: "Email already taken.",
          submit: false
        });
      });
  };

  handleLogout = () => {
    this.setState({ user: null, email: "", password: "", message: "", submit: null });
  }

  renderLogin = () => {
    const { user, email, password, submit, message } = this.state;
    return <Login user={user}
      email={email}
      password={password}
      submit={submit}
      message={message}
      onChange={this.handleChange}
      submitForm={this.submitLogin} />
  }

  renderNewUser = () => {
    const { first_name, last_name, email, password, message, submit } = this.state;
    return <NewUser 
      first_name={first_name}
      last_name={last_name}
      email={email}
      password={password}
      message={message}
      submit={submit} 
      onChange={this.handleChange} 
      submitForm={this.submitNewUser}/>
  }

  renderMyAccount = () => {
    const { email } = this.state;
    return <MyAccount user={email} onClick={this.handleLogout} />
  }

  render() {
    const { submit } = this.state;
    return (
      <div className="App">

        <Navbar submit={submit} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registry" component={Registry} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/login" render={this.renderLogin} />
          <Route path="/new-user" render={this.renderNewUser} />
          <Route path="/my-account" render={this.renderMyAccount} />
        </Switch>

        <footer>
          Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a>.{" "}
          Coded by <a href="https://www.linkedin.com/in/chaltinpagan/" target="_blank" rel="noopener noreferrer">Chaltin Pagan</a>.</footer>
      </div>
    );
  }
}

export default App;
