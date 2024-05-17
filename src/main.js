import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './routes'
import $bus from './utils/events'
import $pages from './data'

const app = createApp(App)

app.use(router)

app.provide('$pages', $pages)
app.provide('$bus', $bus)

app.mount('#app')
