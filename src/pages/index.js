import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_POKEMON_DETAILS = gql`
  query (
    $offset: Int
    $take: Int
    $reverse: Boolean
    $offsetFlavorTexts: Int
    $takeFlavorTexts: Int
    $reverseFlavorTexts: Boolean
  ) {
    getAllPokemon(
      offset: $offset
      take: $take
      reverse: $reverse
      offsetFlavorTexts: $offsetFlavorTexts
      takeFlavorTexts: $takeFlavorTexts
      reverseFlavorTexts: $reverseFlavorTexts
    ) {
      key
      sprite
      color
      baseStats {
        attack
        hp
        specialattack
        speed
      }
    }
  }
`;
function DisplayPokemon() {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      offset: 110,
      take: 20,
      reverse: false,
      offsetFlavorTexts: 1,
      takeFlavorTexts: 1,
      reverseFlavorTexts: true,
    },
  });
  if (loading) return "Pokémons are Loading...";
  if (error) return `Error! ${error.message}`;

  return data.getAllPokemon.map((pokemon) => (
    <a class="pokemon-card" href={`${pokemon.num}`}>
      <img
        class="pokemon-img image-main"
        alt={`${pokemon.key}`}
        src={`${pokemon.sprite}`}
      />
      <h3 class="pokemon-name">{pokemon.key}</h3>
      <div class="details">
        <p>
          <span>HP: </span>
          {pokemon.baseStats.hp}
        </p>
        <p>
          <span>color: </span>
          {pokemon.color}
        </p>
        <p>
          <span>Attack: </span>
          {pokemon.baseStats.attack}
        </p>
        <p>
          <span>Special Attack: </span>
          {pokemon.baseStats.specialattack}
        </p>
        <p>
          <span>Speed: </span>
          {pokemon.baseStats.speed}
        </p>
      </div>
    </a>
  ));
}

const Home = () => {
  return (
    <section class="main">
      <h1 class="main-header">Pokémons List</h1>
      <br />
      <div class="main-grid">
        <DisplayPokemon />
      </div>
    </section>
  );
};

export default Home;
