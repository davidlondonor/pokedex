import React from "react";

const BestPokemon = props => {
  // Con Arrow Function
  return (
    <ul className="listaPokemon">
      {props.nombre.map((nombre, index) => {
        return <li key={index}>{nombre}</li>;
      })}
    </ul>
  );
};

export default BestPokemon;

// function BestPokemon() { // Forma clásica con Function
//   return <p>My favourite Pokemon is Squirtle</p>;
// }
