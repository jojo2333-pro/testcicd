import './assets/main.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import WuJieVue from 'wujie-vue3'
import { preloadApp } from 'wujie'
const apps = reactive({})
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
Object.assign(apps, await fetch(`${base}micro-apps.json`).then(r => r.json()))
await loadConfig()


preloadApp({
    name: 'vue-demo',
    url: apps['vue-demo'].url
})

preloadApp({
    name: 'react-demo',
    url: apps['react-demo'].url
})

createApp(App).use(WuJieVue).provide('apps', apps).mount('#app')