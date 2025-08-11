import './styles/index.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { config } from './config'
import DataVVue3 from '@kjgl77/datav-vue3'
import MyComponents from '@/components/global'

const app = createApp(App)

for (const key in config) {
  if (Object.prototype.hasOwnProperty.call(config, key)) {
    const el = config[key]
    app.config.globalProperties[key] = el
    app.provide(key, el)
  }
}

app.use(createPinia())
app.use(router)

app.use(DataVVue3)
app.use(MyComponents)
app.mount('#app')
