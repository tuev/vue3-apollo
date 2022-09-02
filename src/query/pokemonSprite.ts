import { gql } from 'graphql-tag'

export const pokemonSpriteQuery = gql`
  query pokemon_v2_pokemon($id: Int) {
    pokemon_v2_pokemon(where: {
      id: {
        _eq: $id
      }
    }) {
      id,
      name,
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`

// export const pokemonSpriteQuery = gql`
//   query pokemon_v2_pokemon {
//     pokemon_v2_pokemon(where: {
//       id: {
//         _eq: 3
//       }
//     }) {
//       id,
//       name,
//       pokemon_v2_pokemonsprites {
//         sprites
//       }
//     }
//   }
// `
