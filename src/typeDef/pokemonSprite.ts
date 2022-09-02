export interface PokemonSpriteData {
  id: number,
  name: string
  pokemon_v2_pokemonsprites: PokemonSprite[]
}

export interface PokemonSprite {
  sprites: string
}

export interface PokemonSpriteResponse {
  pokemon_v2_pokemon: PokemonSpriteData[]
}