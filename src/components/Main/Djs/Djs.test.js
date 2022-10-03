import React from "react";
import { render, screen } from '@testing-library/react';
import Djs from "./Djs";

describe("Djs", () => {
  test("matches snapshot", () => {
    render(<Djs />);
    expect(screen).toMatchSnapshot();
  });
});
