import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
