import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Registry from './components/Registry/Registry';
import Opportunities from './components/Opportunities/Opportunities';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Login from './components/Login/Login';
import NewUser from './components/Login/NewUser';
import MyAccount from './components/MyAccount/MyAccount';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
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

  handleLogout = () => {
    this.setState({ email: "", password: "", message: "", submit: null});
  }

  renderLogin = () => {
    const { user, password, submit, message } = this.state;
    return <Login user={user}
            password={password}
            submit={submit}
            message={message}
            onChange={this.handleChange} 
            submitForm={this.submitForm} />
  }

  renderMyAccount = () => {
    const { user } = this.state;
    return <MyAccount user={user} onClick={this.handleLogout} />
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
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/login" render={this.renderLogin} />
          <Route path="/new-user" component={NewUser} />
          <Route path="/my-account" render={this.renderMyAccount} />
        </Switch>
      </div>
    );
  }
}

export default App;
