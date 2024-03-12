import { defineStore } from "pinia";

export const useMainStore = defineStore('main',{

    state: () => ({
        // Navegation Drawer
        drawer: false,
        loginState: false,
        tokenValidate: false,
        
    }),
    actions: {
        actionDrawer(val: boolean){
            this.drawer = val
        }
    }
})