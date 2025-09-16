import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import WuJieVue from 'wujie-vue3'
import { preloadApp } from 'wujie'

let apps = {}

async function loadConfig() {
    apps = await fetch('/micro-apps.json', {cache: 'no-store'}).then(r=>r.json())
}

await loadConfig()


preloadApp({
    name: 'vue-demo',
    url: apps['vue-demo'].url
})

preloadApp({
    name: 'react-demo',
    url: apps['react-demo'].url
})

createApp(App).use(WuJieVue).mount('#app')