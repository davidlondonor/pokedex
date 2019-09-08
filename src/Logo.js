import React from "react";

//const appName = "Welcome to Pokedex"; // Esta se dejó de usar con props.

// Se usa {} cuando hago una operación con varios elementos, div, p y demás
const Logo = props => {
  return (
    <div>
      <header>
        <h1>{props.appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Mi primer React en la vida"
        ></img>
      </header>
    </div>
  );
};

export default Logo;

// Funcion anterior del Logo
// function Logo() {
//   return (
//     <div>
//       <header>
//         <h1>Welcome to the Pokedex</h1>
//         <img
//           src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//           alt="Mi primer React en la vida"
//         ></img>
//       </header>
//     </div>
//   );
// }
