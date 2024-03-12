<script setup lang="ts">
import { useModelAlertPersistentStore } from '@/stores/modelAlertPersistent';
const modelAlertPersistent = useModelAlertPersistentStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get() {
        return modelAlertPersistent.Dialog.active
    },
    set(newVal: boolean) {
        modelAlertPersistent.actionActiveDialog(newVal, "", "", "")
    }
})
const computedDataDialog = computed({
    get() {
        return modelAlertPersistent.Dialog
    },

    set() {

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
            <v-alert
            :text="computedDataDialog.text"
            :title=computedDataDialog.text_title 
            :type="computedDataDialog.type">
            </v-alert>
            <v-btn @click="computedActiveDialog = !computedActiveDialog">
                Ok
            </v-btn>
            <!-- mdi-map-marker -->
            <!-- <v-card :prepend-icon="computedDataDialog.icon" :text="computedDataDialog.text"
                :title=computedDataDialog.text_title>
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Disagree
                    </v-btn>

                </template>
            </v-card> -->
        </v-dialog>
    </div>
</template>