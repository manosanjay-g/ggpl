import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router'
import store from './stores'
const app = createApp(App).use(store)

app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
