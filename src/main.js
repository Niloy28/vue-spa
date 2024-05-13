import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import $bus from './utils/events'
import router from './routes'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$bus = $bus

app.mount('#app')
