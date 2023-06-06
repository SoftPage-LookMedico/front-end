//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import MarketComponent from "../store-inventory-management/pages/market.component.vue";
import MarketBuyerComponent from "../store-inventory-management/pages/market-Buyer.component.vue";
import MarketSupplierComponent from "../store-inventory-management/pages/market-Supplier.component.vue";
import ProductSelectionComponent from "../store-inventory-management/pages/product-selection.component.vue"
import ShoppingChartComponent from "../public/pages/shopping-chart.component.vue";
import notificationsComponent from "../public/pages/notifications.component.vue";
import paymentMethodsComponent from "../public/pages/payment-methods.component.vue";
import doctorPersonalDataComponent from "../profiles-management/pages/doctor-personal-data.component.vue";
import doctorHomeContentComponent from "../profiles-management/pages/doctor-home-content.component.vue";
import supplierHomeContentComponent from "../profiles-management/pages/supplier-home-content.component.vue";
import supplierPersonalDataComponent from "../profiles-management/pages/supplier-personal-data.component.vue";
import supplierBussinessInformationComponent from "../profiles-management/pages/supplier-business-information.component.vue";
import loginComponent from "../identity-and-access-management/pages/login.component.vue";
import addCategoryComponent from "../store-inventory-management/components/add-Category.component.vue";
import InventoryComponent from "../store-inventory-management/components/inventory.component.vue";

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
        
        { path: "/market", name: "Market", component: MarketComponent},
        { path: "/supplier/market", name: "Market-Supplier", component: MarketSupplierComponent},
        { path: "/buyer/market", name: "Market-buyer", component: MarketBuyerComponent},
        { path: "/product-selection", component: ProductSelectionComponent },
        
        { path: "/shopping-chart", component: ShoppingChartComponent },
        { path: "/notifications", component: notificationsComponent},
        
        { path: "/supplier/category/add", name: 'AddCategory', component: addCategoryComponent },
        { path: "/supplier/inventory/add", name: 'Inventory', component: InventoryComponent },
    ]
})

export default router;
