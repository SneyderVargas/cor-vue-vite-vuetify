<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DrawerNavegation from '../components/DrawerNavegation.vue'
</script>
<template>
  <v-app>
    <DrawerNavegation />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

