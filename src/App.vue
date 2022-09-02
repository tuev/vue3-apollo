<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Loading from './components/Loading.vue'
import usePokemonSprite from './composables/usePokemonSprite';

const {id, fetching, error, sprites} = usePokemonSprite();

</script>

<template>
  <div>
    <input v-model="id" />
    <div>
      <Loading v-if="fetching"/>
      <template v-else >
        <img v-for="sprite in sprites" :key="`${sprite}`" :src="`${sprite}`" class="sprite"/>
      </template>
      <p>{{error}}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


.sprite {
  height: 50px;
  width: 50px;
}
</style>
