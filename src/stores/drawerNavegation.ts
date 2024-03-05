import { defineStore } from "pinia";

export const useDrawerNavegationStore = defineStore('drawerNavegation',{
    state: () => ({
        // Navegation Drawer
        drawer: false,
        //model dialog persisten
        activeDialog: false
    }),
    actions: {
        actionDrawer(val: boolean){
            this.drawer = val
        },
        actionActiveDialog(val: boolean){
            this.activeDialog = val
        }
    }
})