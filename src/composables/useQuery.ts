import { ApolloClient, ApolloError, NormalizedCacheObject, OperationVariables, QueryOptions } from '@apollo/client';
import { inject, onMounted, ref } from 'vue';
import { getCurrentInstance } from 'vue';
import { useSlots, useAttrs } from 'vue'
import useApolloClient from './useApolloClient';

export default <T>() => {
  const apolloClient = useApolloClient();
  const loading = ref<boolean>(false);
  const data = ref<T | undefined>();
  const error = ref<ApolloError | undefined>();

  const querry = async (options: QueryOptions<OperationVariables, any>) => {
    try {
      loading.value = true;
      data.value = await (await apolloClient.query<T>(options)).data
    } catch (e) {
      error.value = e as ApolloError
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    error,
    querry
  }
}
