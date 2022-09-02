import { ApolloError } from "@apollo/client/core"
import { computed } from "@vue/reactivity"
import { ref, watch } from "vue"
import { flatten } from "../helpers/flatten"
import { pokemonSpriteQuery } from '../query/pokemonSprite'
import { PokemonSpriteData, PokemonSpriteResponse } from "../typeDef/pokemonSprite"
import useApolloClient from "./useApolloClient"
import useQuery from "./useQuery"

export default () => {
  const id = ref(0)
  const apolloClient = useApolloClient();

  const { data, loading, error, querry } = useQuery<PokemonSpriteResponse>();
  const queryPokemonSprite = async (id: number) => {
    await querry({
      query: pokemonSpriteQuery,
      variables: { id },
    });
  }

  const sprites = computed(() => {
    if (!data.value) return [];
    return flatten(data.value.pokemon_v2_pokemon.reduce<string[]>((acc, curr) => {
      const sprite = curr.pokemon_v2_pokemonsprites.map(sprite => sprite.sprites);
      return [...acc, ...sprite]
    }, []).map(sprite => JSON.parse(sprite))[0])
  })

  watch(id, queryPokemonSprite)

  watch(data, (value) => console.log({ data: value }))
  watch(loading, (value) => console.log({ loading: value }))
  watch(error, (value) => console.log({ error: value }))
  watch(() => apolloClient, (apollo) => console.log(apollo, 'apollo'), { deep: true })

  return {
    id,
    changdId: (value: number) => id.value = value,
    data,
    queryPokemonSprite,
    sprites,
    error,
    loading
  }
}