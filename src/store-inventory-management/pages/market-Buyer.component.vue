<template>

  <!--products load-->

    <div class="font-bold flex align-items-center justify-content-center p-4 border-round">
        <h2>All Produtcs</h2>
    </div>
    <div class="pv-card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`${slotProps.data.photoUrl}`" :alt="slotProps.data.photoUrl"/>
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <router-link :to="{name:'Product-selection', params:{id : products.title}}" >
                                    <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                                </router-link>
                                <div class="text-2xl ">{{ slotProps.data.description }}</div>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <pv-tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></pv-tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                <router-link
                                    to="/product-selection"
                                    custom
                                    v-slot="{ navigate }"
                                >
                                    <pv-button
                                        @click="navigate"
                                        role="link"
                                        v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                                        v-on:click ="clicked = !clicked"
                                    >
                                        Select
                                    </pv-button>
                                </router-link>
                                <pv-button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></pv-button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <pv-tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></pv-tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="`${slotProps.data.photoUrl}`" :alt="slotProps.data.photoUrl" @click="navigate" v-on:click ="clicked = !clicked" />
                            <router-link :to="{name:'Product-selection', params:{id : slotProps.data.id}}" >
                                <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                            </router-link>

                            <div class="text-2xl ">{{ slotProps.data.description }}</div>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                            <router-link
                                to="/product-selection"
                                custom
                                v-slot="{ navigate }"
                            >
                                <pv-button
                                    @click="navigate"
                                    role="link"
                                    v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                                    v-on:click ="clicked = !clicked"
                                >
                                    Select
                                </pv-button>
                            </router-link>
                            <pv-button @click="addToCart(products.title, i)" icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></pv-button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
  <!--/products load-->



</template>

<script>
import { ProductsApiService } from '../services/products-api.service.js';

export default {Item: null,
    data() {
        return {
            cart: [],
            selectedItem: null,
            products: {},
            layout: 'grid',
            productsService: null,
            value: null
        };
    },
    props: ['inventory', 'addToCart'],
    created() {
        console.log("created");
        this.productsService = new ProductsApiService();
        this.productsService.getAll()
            .then((response) => {
                this.products = response.data;
                console.log(response);
            });
        console.log(this.products);
    },

    methods: {
        addToCart (title, index) {
          if(!this.cart[title]) this.cart[title] = 0
            this.cart[title] += this.inventory[index].quantity
            this.inventory[index].quantity = 0
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>

<style scoped>

.lightblue {
    background-color: #0099AD;
    position: relative;
    border-radius: 20px;
    width: 150px;
    text-align: center;
    display:table-cell;
    vertical-align:middle;
}

.green {
    background-color: #2D8425;
}

h2{
    text-align: left;
}
.container {
    padding: 0px !important;
}
.v-btn.withoutupercase {
    text-decoration: none;
}
.v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}
.card1 {
    z-index: 10;
}
.card2 {
    z-index: 1;
}

</style>

