//Routing Module

import homeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import {createRouter, createWebHistory} from "vue-router";
import PersonalData from "../public/pages/personal-data.component.vue";
import marketComponent from "../public/pages/market.component.vue";
import ShoppingChartComponent from "../public/pages/shopping-chart.component.vue";
import notificationsComponent from "../public/pages/notifications.component.vue";
import userContentComponent from "../public/pages/user-content.component.vue";
import paymentMethodsComponent from "../public/pages/payment-methods.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/market", component: marketComponent},
        { path: "/shopping-chart", component: ShoppingChartComponent },
        { path: "/notifications", component: notificationsComponent},
        { path: "/user", component: userContentComponent},
        { path: "/home", component: homeComponent},
        { path: "/", redirect: "/home"},
        { path: "/personal-data", component: PersonalData},
        { path: "/payment-methods", component: paymentMethodsComponent}
    ]
})

export default router;