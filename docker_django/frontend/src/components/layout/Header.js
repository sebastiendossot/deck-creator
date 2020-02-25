import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'


export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }


    
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-0">
      <span className="navbar-text mr-3">
        <strong>
          {
            user ? `Welcome ${user.username}` : ""
          }
        </strong>
      </span>
      
        <li className="nav-item">
          <button className="nav-link btn btn-info btn-sm" onClick={this.props.logout}>Logout</button>          
        </li>
      </ul>
      );

    const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login </Link>            
        </li>
      </ul> 
    </div>
    )
      
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Navpor</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);
