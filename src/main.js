import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "./router/index.js";

//Prime Vue Material Design Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-menubar', Menubar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .mount('#app')
