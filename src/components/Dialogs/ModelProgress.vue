<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isDialogOpen" persistent>
      <div class="text-center">
        <v-progress-circular
          :size="70"
          :width="7"
          :color="modelProgress.Progress.color"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModelProgressStore } from '@/stores/modelProgress';
import { storeToRefs } from 'pinia';

const modelProgress = useModelProgressStore();
const { Progress } = storeToRefs(modelProgress);

const isDialogOpen = computed({
  get() {
    return Progress.value.active;
  },
  set(newValue: boolean) {
    if (!newValue) {
      modelProgress.closeProgress();
    }
  },
});
</script>
<!-- <script setup lang="ts">
import { useModelProgressStore } from '@/stores/modelProgress';
const modelProgress = useModelProgressStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get() {
        return modelProgress.Progress.active
    },
    set(newVal: boolean) {
        modelProgress.actionActiveProgress(newVal, "")
    }
})
const computedDataDialog = computed({
    get() {
        return modelProgress.Progress
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
</template> -->