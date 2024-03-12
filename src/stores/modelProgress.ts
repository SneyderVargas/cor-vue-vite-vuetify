import { defineStore } from "pinia";

export const useModelProgressStore = defineStore('modelProgress',{

    state: () => ({
        Progress: {
            active: false,
            color: "", // primary,  red, purple, green, amber
        }
    }),
    actions: {
        actionActiveProgress(val: boolean, color: string){
            this.Progress.active = val
            this.Progress.color = color
        }
    }
})