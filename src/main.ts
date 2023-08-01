import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HighchartsVue from 'highcharts-vue';
import PrimeVue from 'primevue/config';
import 'bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "primevue/resources/themes/lara-light-indigo/theme.css";
const app = createApp(App)
app.use(createPinia()).use(HighchartsVue as any).use(PrimeVue);
app.use(router)

app.mount('#app')
