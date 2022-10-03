import React from "react";
import { render, screen } from '@testing-library/react';
import Footer from "./Footer";
import {themeContext} from '../../context/themeContext';

describe("Footer", () => {

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  test("matches snapshot", () => {
    render(<themeContext.Provider value={themeData}>
      <Footer />
    </themeContext.Provider>);
    expect(screen).toMatchSnapshot();
  });

  test("Footer text", () => {
    const {container} = render(<themeContext.Provider value={themeData}>
      <Footer />
    </themeContext.Provider>);
    //const txt = screen.getByText(/Developed with love by Full Stack @ The Bridge/i);
    //expect(txt).toBeInTheDocument();
    const result = container.querySelector('footer')
    expect(result.textContent).toBe('Developed with love by Full Stack @ The Bridge')
  });
});