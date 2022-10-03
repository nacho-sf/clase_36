import React from "react";
import { render, screen } from '@testing-library/react';
import Donations from "./Donations";

describe("Donations", () => {
  test("matches snapshot", () => {
    render(<Donations />);
    expect(screen).toMatchSnapshot();
  });
});
