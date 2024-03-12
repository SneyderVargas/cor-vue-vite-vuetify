
// Plugins
import { registerPlugins } from '@/plugins'
import { useMainStore } from '@/stores/main';


// import './assets/mkain.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

const app = createApp(App)

registerPlugins(app)


app.use(createPinia())
const mainStore = useMainStore()

router.beforeEach(async (to, from) => {
    const store = mainStore
    if (to.name != 'login' && to.name != 'register') {
        var auth = store.loginState
        if (!auth) {
            return { name: 'login' }
        }
    }
})
app.use(router)



app.mount('#app')
