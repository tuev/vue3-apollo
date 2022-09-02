import { createApp, h, provide } from 'vue'
import './style.css'
import App from './App.vue'
// import { apolloProvider } from './ApolloClient'
import { ApolloClient } from '@apollo/client/core'
import { gql } from 'graphql-tag'
import { apolloClient } from './ApolloClient'
import { apolloProvider } from './ApolloClient'


createApp({
  setup() {
    provide('$apollo', apolloClient)
  },
  render: () => h(App),
}).use(apolloProvider).mount('#app')
