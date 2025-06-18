import './assets/main.css'
import { createPinia } from 'pinia'
const pinia = createPinia()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(pinia)
