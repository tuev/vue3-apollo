import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";
import { inject } from "vue"

export default () => {
  const apolloClient = inject('$apollo') as ApolloClient<NormalizedCacheObject>

  return apolloClient;
}