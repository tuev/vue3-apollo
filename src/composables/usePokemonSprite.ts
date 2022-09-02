import { computed } from "@vue/reactivity"
import { ref, watch } from "vue"
import { flatten } from "../helpers/flatten"
import { pokemonSpriteQuery } from '../query/pokemonSprite'
import { PokemonSpriteData, PokemonSpriteResponse } from "../typeDef/pokemonSprite"
import { useQuery } from '@urql/vue';

export default () => {
  const id = ref(0)
  const isPaused = computed(() => !id.value)

  const {
    data,
    fetching,
    error,
    resume,
    pause,
    executeQuery
  } = useQuery<PokemonSpriteResponse>({
    query: pokemonSpriteQuery,
    variables: { id },
    pause: isPaused
  });

  const sprites = computed(() => {
    if (!data.value) return [];
    return flatten(data.value.pokemon_v2_pokemon.reduce<string[]>((acc, curr) => {
      const sprite = curr.pokemon_v2_pokemonsprites.map(sprite => sprite.sprites);
      return [...acc, ...sprite]
    }, []).map(sprite => JSON.parse(sprite))[0])
  })


  watch(data, (value) => console.log({ data: value }))
  watch(error, (value) => console.log({ error: value }))

  return {
    id,
    changdId: (value: number) => id.value = value,
    data,
    sprites,
    fetching,
    error,
  }
}