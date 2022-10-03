<script setup lang="ts">
import { RouterLink } from "vue-router";

const routes = [
  {
    to: '/',
    name: 'home'
  },
  {
    to: '/to-do-list/1?selected=all',
    name: 'to do list'
  },
];
</script>

<template>
  <header class="flex place-content-center gap-x-10 p-2 bg-black">
    <RouterLink v-for="({ to, name }, i) in routes" :key="i" :to="to" class="uppercase text-white">
      {{ name }}
    </RouterLink>
  </header>
</template>
