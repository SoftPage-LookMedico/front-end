<template>
<div>
    <pv-sidebar v-bind:visible="visible">
        <div class="flex flex-column">
            <router-link
                v-for="item in items"
                :key="item.label"
                :to="item.to"
                custom
                v-slot="{navigate, href}">
                <pv-button class="p-button-text  text-white"
                           :href="href"
                           @click="navigate">
                    <span class="material-icons">{{item.icon}}</span>
                    <span>{{item.label}}</span>
                </pv-button>
            </router-link>
        </div>
        <pv-button icon="pi pi-times" @click="visible = false" />
    </pv-sidebar>

</div>

</template>

<script>

export default {
    name: "side-bar-content",
    props: {
        visible: Boolean
    },
    data(){
        return {
            items: [
                { label: 'Home', icon: 'home', to: '/home'},
                { label: 'Personal data', icon:'border_color', to: '/personal-data'},
                { label: 'Payment Methods', icon: 'home', to:'/payment-methods'}
            ]
        }
    }
}
</script>

<style scoped>
*{
    background-color: #25c6db
}
</style>