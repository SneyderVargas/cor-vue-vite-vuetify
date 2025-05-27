
// Plugins
import { registerPlugins } from '@/plugins'

// import './assets/mkain.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

const app = createApp(App)

registerPlugins(app)


app.use(createPinia())

app.use(router)



app.mount('#app')
