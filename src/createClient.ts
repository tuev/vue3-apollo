import { createClient } from '@urql/vue';

const client = createClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
  // requestPolicy: 'cache-and-network',
});

export default client;