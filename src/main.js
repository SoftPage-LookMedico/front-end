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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Panel from "primevue/panel";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Textarea from "primevue/textarea";

createApp(App)
    .use(ToastService)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-menubar', Menubar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-dialog', Dialog)
    .component('pv-input-text', InputText)
    .component('pv-dropdown', Dropdown)
    .component('pv-panel', Panel)
    .component('pv-toast', Toast)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
