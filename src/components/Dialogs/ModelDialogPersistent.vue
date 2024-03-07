
<script setup lang="ts">
import  { useDrawerNavegationStore } from '@/stores/drawerNavegation';
const drawerNavegation = useDrawerNavegationStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get(){
        return drawerNavegation.Dialog.active
    },
    set(newVal: boolean){
        drawerNavegation.actionActiveDialog(newVal, "","","")
    }
})

const computedDataDialog = computed({
    get(){
        return drawerNavegation.Dialog
    },
    
    set () {
        
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
        <v-dialog  v-model="computedActiveDialog" max-width="400" persistent>
            <!-- mdi-map-marker -->
            <v-card :prepend-icon="computedDataDialog.icon"
                :text="computedDataDialog.text"
                :title=computedDataDialog.text_title>

                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <!-- <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Disagree
                    </v-btn> -->

                    <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Ok
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>