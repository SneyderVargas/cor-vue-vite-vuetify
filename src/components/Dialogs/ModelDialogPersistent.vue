
<script setup lang="ts">
import  { useDrawerNavegationStore } from '@/stores/drawerNavegation';
const drawerNavegation = useDrawerNavegationStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get(){
        return drawerNavegation.activeDialog
    },
    set(newVal){
        drawerNavegation.actionActiveDialog(newVal)
    }
})

// export default {
//     data() {
//         return {
//             dialog: false,
//         }
//     },
// }
</script>
<template>
    <div class="text-center pa-4">
        <v-dialog v-model="computedActiveDialog" max-width="400" persistent>

            <v-card prepend-icon="mdi-map-marker"
                text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
                title="Use Google's location service?">

                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Disagree
                    </v-btn>

                    <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Agree
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>