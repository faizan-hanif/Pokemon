# Pokémon
Simple react app to get Pokémon data from Apollo client API (context API)

# Requirements:

Must use the Apollo client & Apollo Hooks with context API for consuming the API. You can create a list page where you can show all films or Pokémonn data and create a separate detail page to show detail page with complete data in a good presentable way. Add search on the list as well with some attributes like title, name, etc.

## index.js

```
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


export const client = new ApolloClient({
  // Provide required constructor fields
  uri: 'https://graphqlpokemon.favware.tech/v8',
  cache: new InMemoryCache(),

  // Provide some optional constructor fields
  name: 'graphql-pokemon-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
});
```
## Rendering on homepage of the App
```
import { useQuery, gql } from '@apollo/client';


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

  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS,{
    variables: {
      offset: 110,
      take: 20,
      reverse: false,
      offsetFlavorTexts: 1,
      takeFlavorTexts: 1,
      reverseFlavorTexts: true,
      },});
  if (loading) return 'Pokémons are Loading...';
  if (error) return `Error! ${error.message}`;

  return data.getAllPokemon.map((pokemon) => (
    <a class="pokemon-card" href={`${pokemon.num}`}>
      <img class="pokemon-img image-main" src={`${pokemon.sprite}`} />
      <h3 class="pokemon-name">{pokemon.key}</h3>
      <div class="details">
      <p><span>HP: </span>{pokemon.baseStats.hp}</p>
      <p><span>color: </span>{pokemon.color}</p>
      <p><span>Attack: </span>{pokemon.baseStats.attack}</p>
      <p><span>Special Attack: </span>{pokemon.baseStats.specialattack}</p>
      <p><span>Speed: </span>{pokemon.baseStats.speed}</p>
      </div>
    </a>
  ));
};
```



