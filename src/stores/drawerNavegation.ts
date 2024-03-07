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
            icon: ""
        }
    }),
    actions: {
        actionDrawer(val: boolean){
            this.drawer = val
        },
        actionActiveDialog(val: boolean, title: string, text: string, icon: string){
            this.Dialog.active = val
            this.Dialog.text_title = title
            this.Dialog.text = text
            this.Dialog.icon = icon
        }
    }
})