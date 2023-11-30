import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import router from "./router.js";
import 'vfonts/Lato.css'
import naive from 'naive-ui';
import { createPinia } from "pinia";
const pinia = createPinia();
import Provider from './pages/Provider.vue';
const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }
import YmapPlugin from 'vue-yandex-maps';
const app = createApp(Provider);
app.use(YmapPlugin, settings)
app.use(pinia);
// app.use(pinia);
app.use(naive);
app.use(router);
app.mount('#app')
// createApp(App).mount('#app')
