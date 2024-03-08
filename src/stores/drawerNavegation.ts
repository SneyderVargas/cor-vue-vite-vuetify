import { defineStore } from "pinia";

export const useDrawerNavegationStore = defineStore('drawerNavegation',{

    state: () => ({
        // Navegation Drawer
        drawer: false,
        //model dialog persisten
        Dialog: {
            active: false,
            text_title: "",
            text: "",
            type: "" // success, info, warning, error
        },
        Progress: {
            active: false,
            color: "", // primary,  red, purple, green, amber
        }
    }),
    actions: {
        actionDrawer(val: boolean){
            this.drawer = val
        },
        actionActiveDialog(val: boolean, title: string, text: string, type: string){
            this.Dialog.active = val
            this.Dialog.text_title = title
            this.Dialog.text = text
            this.Dialog.type = type
        },
        actionActiveProgress(val: boolean, color: string){
            this.Progress.active = val
            this.Progress.color = color
        }
    }
})