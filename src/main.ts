/* Default */
// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* Tailwind CSS */
import './style.css'

/* PrimeVue */
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

/* PrimeVue Component */
import Button from "primevue/button"
import FloatLabel from "primevue/floatlabel"
import InputText from "primevue/inputtext"
import Select from "primevue/select"

import Menu from 'primevue/menu';





const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(createPinia())

app.component('Button', Button);
app.component('FloatLabel', FloatLabel);
app.component('InputText', InputText)
app.component('Menu', Menu)
app.component('Select', Select)
app.mount('#app')
