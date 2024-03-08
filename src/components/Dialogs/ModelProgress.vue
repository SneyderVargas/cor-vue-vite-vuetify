<script setup lang="ts">
import { useDrawerNavegationStore } from '@/stores/drawerNavegation';
const drawerNavegation = useDrawerNavegationStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get() {
        return drawerNavegation.Progress.active
    },
    set(newVal: boolean) {
        drawerNavegation.actionActiveProgress(newVal, "", "")
    }
})
const computedDataDialog = computed({
    get() {
        return drawerNavegation.Progress
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
        <v-dialog v-model="computedActiveDialog" persistent>
            <div class="text-center">
                <v-progress-circular :size="70" :width="7" :color="computedDataDialog.color" indeterminate></v-progress-circular>
            </div>
        </v-dialog>
    </div>
</template>