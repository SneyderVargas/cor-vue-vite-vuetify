<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DrawerNavegation from '../components/DrawerNavegation.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
  <v-app>
    <DrawerNavegation />
    <v-main>
      <RouterView />
    </v-main>
    <Footer/>
  </v-app>
</template>

