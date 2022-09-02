import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import urql from '@urql/vue';
import client from './createClient';

createApp(App).use(urql, client).mount('#app')
