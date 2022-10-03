import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext';
import {themeContext} from '../../../context/themeContext';


function Nav() {

  const {theme, toggleTheme} = useContext(themeContext); // Consumer

  return (
       <nav className={"nav-bar"+theme}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/about">About</Link>
          <Link to="/donations">Donations</Link>
          <Link to="/djs">Djs</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/contact">Contact</Link>

          <userContext.Consumer>
            {({logout,user})=> user?<span>Hola, {user} <Button variant="contained" size="small" onClick={logout} >Logout</Button></span>:""}
          </userContext.Consumer>
  
          <Button variant="contained" size="small" onClick={toggleTheme} >Theme</Button>
  
        </nav>
  )
}
export default Nav;
