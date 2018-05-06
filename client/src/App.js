import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './components/Home/Home';
import Registry from './components/Registry/Registry';
import Opportunities from './components/Opportunities/Opportunities';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar inverse collapseOnSelect id="nav">
          <Navbar.Header id="appName">
            <Navbar.Brand>
              <p>
              <Link to="/">
                <img alt="elephant" src="https://png.icons8.com/material/35/ffffff/elephant.png" />
                Art Elephant
              </Link>
              </p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} componentClass="p" ><Link to="/registry">Artist Registry</Link></NavItem>
              <NavItem eventKey={2} componentClass="p" ><Link to="/opportunities">Opportunities</Link></NavItem>
              <NavItem eventKey={3} componentClass="p" ><Link to="/about">About</Link></NavItem>
              <NavItem eventKey={4} componentClass="p" ><Link to="/faq">FAQ</Link></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass="p" ><Link to="/login">Login</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registry" component={Registry} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
