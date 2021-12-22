import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import ApiService from './services/ApiService'

// import { ComponentCustomProperties } from 'vue';
// declare module "@vue/runtime-core" { interface ComponentPublicInstance { $api: typeof ApiService; } }

const app = createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)//.mount('#app')

app.config.globalProperties.$api = ApiService;


app.mount('#app');
