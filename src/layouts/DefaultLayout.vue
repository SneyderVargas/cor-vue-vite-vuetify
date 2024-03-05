<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DrawerNavegation from '../components/DrawerNavegation.vue'
import Footer from '../components/Footer.vue'
</script>
<style >
.containerFuild {
  padding: 64px 0px 0px 0px;
  /* background: #e8e9ee; */
}
</style>

<template>
  <v-app>
    <DrawerNavegation />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>      
    </v-main>
    <Footer/>
  </v-app>
</template>

