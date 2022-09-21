import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext';

class Nav extends Component {
  render() {
    return <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/about">About</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/djs">Djs</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/contact">Contact</Link>
        <userContext.Consumer>
          {({logout,user})=> user?<span>Hola, {user} <Button variant="contained" size="small" onClick={logout} >LOGOUT</Button></span>:""}
        </userContext.Consumer>
      </nav>;
    
  }
}

export default Nav
