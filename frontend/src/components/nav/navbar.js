import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/tweets'}>All tweets</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/new_tweet'}>Write a Tweet</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/logout'}>Login</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Chirper</h1>
        { this.getLinks() }
      </div>
    );[]
  }
}

export default Navbar