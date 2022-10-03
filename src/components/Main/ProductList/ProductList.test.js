import React from "react";
import { render, screen } from '@testing-library/react';
import ProductList from "./ProductList";

describe("ProductList", () => {
  test("matches snapshot", () => {
    render(<ProductList />);
    expect(screen).toMatchSnapshot();
  });
});
