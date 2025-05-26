// src/stores/modelProgress.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ProgressState {
  active: boolean;
  color: string | undefined;
}

export const useModelProgressStore = defineStore('modelProgress', () => {
  const Progress = ref<ProgressState>({
    active: false,
    color: undefined,
  });

  function actionActiveProgress(active: boolean, color: string = 'primary') {
    Progress.value.active = active;
    Progress.value.color = active ? color : undefined; // Reset color when closing
  }

  function closeProgress() {
    Progress.value.active = false;
    Progress.value.color = undefined;
  }

  return {
    Progress,
    actionActiveProgress,
    closeProgress,
  };
});
// import { defineStore } from "pinia";

// export const useModelProgressStore = defineStore('modelProgress',{

//     state: () => ({
//         Progress: {
//             active: false,
//             color: "", // primary,  red, purple, green, amber
//         }
//     }),
//     actions: {
//         actionActiveProgress(val: boolean, color: string){
//             this.Progress.active = val
//             this.Progress.color = color
//         }
//     }
// })