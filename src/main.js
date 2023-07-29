import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app')
