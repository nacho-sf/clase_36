import React from "react";
import { render, screen } from '@testing-library/react';
import Pokemon from "./Pokemon";

describe("Pokemon", () => {
  const pokemon = {name:"Mew", url:"https://pokeapi.co/api/v2/pokemon/mew"};
  test("matches snapshot", () => {
    render(<Pokemon data={pokemon} />);
    expect(screen).toMatchSnapshot();
  });
});
