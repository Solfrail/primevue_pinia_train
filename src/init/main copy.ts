// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* PrimeVue */
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(createPinia())

app.mount('#app')
