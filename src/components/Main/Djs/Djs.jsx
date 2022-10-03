import React, { useState, useEffect } from 'react'
import useFetch from "../../../hooks/useFetch";


function Djs() {
  const [pokemons, setPokemons] = useState([]);

  const {loading,result} = useFetch('https://pokeapi.co/api/v2/pokemon');



  /*useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
      setPokemons(data.results);
    }
    getPokemons();
  }, []);// [] --> componentDidMount*/

  return (
    <section>
      <h1>DJs residentes</h1>
      {loading?"Spinner...":result.results.map((pokemon) => <h3>{pokemon.name}</h3>)}

    </section>

  );
}

export default Djs
