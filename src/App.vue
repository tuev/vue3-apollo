<script setup lang="ts">
import usePokemonSprite from './composables/usePokemonSprite';
import Loading from './components/Loading.vue';
const {id,sprites, error, loading} = usePokemonSprite();
</script>

<template>
  <div>
    <input v-model="id" />
    <div>
      <Loading v-if="loading"/>
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
