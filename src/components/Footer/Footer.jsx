import React, { useContext } from 'react'
import {themeContext} from '../../context/themeContext'


function Footer() {
  const {theme} = useContext(themeContext); // Consumer

  return (
    <footer className={"footer"+theme}>Developed with love by Full Stack @ The Bridge</footer>
  )
}

export default Footer