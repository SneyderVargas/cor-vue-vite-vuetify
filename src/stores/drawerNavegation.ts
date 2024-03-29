import { defineStore } from "pinia";

export const useDrawerNavegationStore = defineStore('drawerNavegation',{

    state: () => ({
        // Navegation Drawer
        drawer: false,
    }),
    actions: {
        actionDrawer(val: boolean){
            this.drawer = val
        }
    }
})