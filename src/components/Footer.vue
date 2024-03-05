<template>
    <v-footer class=" bg-indigo-lighten-1 text-center d-flex footerClass flex-column" :absolute="false" app>
        <div>
            <v-btn v-for="icon in icons" key="icon" :icon="icon.value" class="mx-4" variant="text"></v-btn>
        </div>
        <v-divider></v-divider>
        <div>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-footer>  
</template>
<script setup lang="ts">
interface Icons {
    value: string
}
const icons: Icons[] = [
    {value: 'mdi-facebook'},
    {value: 'mdi-twitter'},
    {value: 'mdi-linkedin'},
    {value: 'mdi-instagram'},
]

</script> 
<style >
.footerClass {
  padding: 0px 0px 0px 0px;
}
</style>