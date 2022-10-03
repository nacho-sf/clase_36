import React from "react";
import { render, screen } from '@testing-library/react';
import ProductItem from "./ProductItem";

describe("ProductItem", () => {

  const product = {name: "Vodka con lima", info:"Vodka con lima tropical", price:10, image:"https://images.absolutdrinks.com/drink-images/Raw/Absolut/c78c3348-ae2a-4982-aa63-4b25e7ec732b.jpg?imwidth=500"}
  test("matches snapshot", () => {
    render(<ProductItem data={product} />);
    expect(screen).toMatchSnapshot();
  });
});
