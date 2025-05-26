<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DrawerNavegationNotLogin from '../components/DrawerNavegationNotLogin.vue'
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
    <DrawerNavegationNotLogin />
    <div id="pageDashboard">
      <v-container grid-list-xl fluid>
        <RouterView />
      </v-container>      
    </div>
    <Footer/>
  </v-app>
</template>

