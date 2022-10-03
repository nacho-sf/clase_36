import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import '../src/styles/styles.scss'

import {userContext} from './context/userContext';
import {themeContext} from './context/themeContext';



function App() {

  const [user, setUser] = useState("Guille"); // state para componente funcional

  const [theme, setTheme] = useState("__dark"); // state para theme

  const login = (name) => setUser(name); // user = name. Ej: name="Guille" --> user = "Guille"

  const logout = () => setUser(""); // user = ""

  const toggleTheme = () => theme===""?setTheme("__dark"):setTheme("");

  const data = {
    user,
    login,
    logout,
    toggleTheme
  }

  const themeData = {
    theme, // __dark o ""
    toggleTheme
  }

  return (
    <div className="App">
      <themeContext.Provider value={themeData}>      
        <BrowserRouter>
          <userContext.Provider value={data}>
            <Header />
            <Main />
          </userContext.Provider>
        </BrowserRouter>
        <Footer />
      </themeContext.Provider>
    </div>
  );
}

export default App;