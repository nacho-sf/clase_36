import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
import { themeContext } from '../../../context/themeContext';
import { userContext } from '../../../context/userContext';
import {BrowserRouter} from 'react-router-dom';

describe("Nav", () => {

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  const userData = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user = ''
  }

  test("matches snapshot", () => {
    render(
      <themeContext.Provider value={themeData}>
        <BrowserRouter>
          <userContext.Provider value={userData}>
            <Nav />
          </userContext.Provider>
        </BrowserRouter>
      </themeContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
