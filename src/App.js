import React from "react";
import logo from "./logo.svg"; // no se está usando asi se ve oscuro
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon nombre={pokemonNames} />
      {/* <HelloWorld />
      <Mentor /> */}
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;

// const Mentor = () => {
//   const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];
//   return <span>{mentors.join(", ")}</span>;
// };

// const HelloWorld = () => {
//   return <h1>Maestro React, Welcome to the Jungle</h1>;
// };
