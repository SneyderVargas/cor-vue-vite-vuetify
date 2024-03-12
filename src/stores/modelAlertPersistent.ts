import { defineStore } from "pinia";

export const useModelAlertPersistentStore = defineStore('modelAlertPersistent',{

    state: () => ({
        //model dialog persisten
        Dialog: {
            active: false,
            text_title: "",
            text: "",
            type: "" // success, info, warning, error
        },
    }),
    actions: {
        actionActiveDialog(val: boolean, title: string, text: string, type: string){
            this.Dialog.active = val
            this.Dialog.text_title = title
            this.Dialog.text = text
            this.Dialog.type = type
        },
    }
})