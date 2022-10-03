import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import { themeContext } from '../../context/themeContext';
import { userContext } from '../../context/userContext';
import {BrowserRouter} from 'react-router-dom';

describe("Header", () => {

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
            <Header />
          </userContext.Provider>
        </BrowserRouter>
      </themeContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});