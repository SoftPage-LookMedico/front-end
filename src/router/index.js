//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import marketComponent from "../public/pages/market.component.vue";
import ShoppingChartComponent from "../public/pages/shopping-chart.component.vue";
import notificationsComponent from "../public/pages/notifications.component.vue";
import paymentMethodsComponent from "../public/pages/payment-methods.component.vue";
import doctorPersonalDataComponent from "../profiles-management/pages/doctor-personal-data.component.vue";
import doctorHomeContentComponent from "../profiles-management/pages/doctor-home-content.component.vue";
import supplierHomeContentComponent from "../profiles-management/pages/supplier-home-content.component.vue";
import supplierPersonalDataComponent from "../profiles-management/pages/supplier-personal-data.component.vue";
import supplierBussinessInformationComponent from "../profiles-management/pages/supplier-business-information.component.vue";
import loginComponent from "../identity-and-access-management/pages/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: "/front-end", redirect: 'login'},
        { path: "/front-end/login", redirect: 'login'},
        { path: "/", redirect: 'login'},

        { path: "/doctor/:id/home", name:'doctor-home', component: doctorHomeContentComponent},
        { path: "/doctor/:id/personal-data", name: 'doctor-personal-data',component: doctorPersonalDataComponent},

        { path: "/supplier/:id/home", name: 'supplier-home', component: supplierHomeContentComponent},
        { path: "/supplier/:id/personal-data", name: 'supplier-personal-data', component: supplierPersonalDataComponent},
        { path: "/supplier/:id/business-information", name: 'supplier-business-information', component: supplierBussinessInformationComponent},

        { path: "/payment-methods", component: paymentMethodsComponent},
        { path: "/market", component: marketComponent},
        { path: "/shopping-chart", component: ShoppingChartComponent },
        { path: "/notifications", component: notificationsComponent}
    ]
})

export default router;
