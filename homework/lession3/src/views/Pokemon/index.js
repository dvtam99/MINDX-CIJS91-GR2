import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const handleGetListPokemon = () => {
    console.log("line 5");
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        console.log("line 8" + res);
        setListPokemon(res.results);
      });

    console.log("line 9");
  };

  const ascHandleGetListPokemon = async () => {
    console.log("line 18");
    // let res = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    let res = await fetch("https://pokeapi.co/api/v2/pokemon");
    res = await res.json();
    console.log("line 21: " + res);
    setListPokemon(res.results);

    console.log("line 23");
  };
  //   handleGetListPokemon();
  useEffect(() => {
    // handleGetListPokemon();
    ascHandleGetListPokemon();
  }, []);

  return (
    <div>
      Pokemon
      {listPokemon.map((poke, idx) => (
        <div key={idx}>
          <b>{poke.name}---</b>
          <span>{poke.url}</span>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
