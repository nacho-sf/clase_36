import React, { useState, useEffect } from 'react'

function Djs() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
      setPokemons(data.results);
    }
    getPokemons();
  }, []);// [] --> componentDidMount

  return (
    <section>
      <h1>DJs residentes</h1>
      {pokemons.map((pokemon) => <h3>{pokemon.name}</h3>)}

    </section>

  );
}

export default Djs
