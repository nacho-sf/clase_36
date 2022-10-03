import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "./Main";
import {BrowserRouter} from 'react-router-dom';

describe("Main", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <Main />
    </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
