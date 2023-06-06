<template>
    <div class="my-activity">
        <h3>Cards</h3>
        <hr>
        <div class="activities">
            <pv-card class="activity">
                <template #content>
                    <div class="flex inline-block justify-content-between text-gray-700">
                        <span class="material-icons">payments</span>
                        <span>Credit Card / Debit Card</span>

                        <div>                            <router-link
                            v-for="item in items"
                            :key="item.label"
                            :to="item.to"
                            custom
                            v-slot="{navigate, href}">
                            <pv-button
                                :href="href"
                                @click="navigate">ADD
                            </pv-button>
                        </router-link>
                            <router-view></router-view>
                        </div>

                    </div>
                </template>
            </pv-card>

        </div>
    </div>

    <div class="my-activity">
        <h3>E-wallet</h3>
        <hr>
        <div class="activities">
            <pv-card class="activity">
                <template #content>
                    <div class="flex inline-block justify-content-between text-gray-700">
                        <span class="material-icons">paypal</span>
                        <span>Paypal</span>

                        <div>
                            <pv-button>ADD</pv-button>
                        </div>

                    </div>
                </template>
            </pv-card>

            <pv-card class="activity">
                <template #content>
                    <div class="flex inline-block justify-content-between text-gray-700">
                        <span class="material-icons">stripe</span>
                        <span>Stripe</span>

                        <div >
                                <pv-button>ADD
                                </pv-button>
                        </div>

                    </div>
                </template>
            </pv-card>

        </div>
    </div>
</template>

<script>
export default {
    name: "payment-methods",
    data(){
        return {
            items: [
                { label: 'Market', icon: 'home', to: '/market'},
            ]
        }
    }
}
</script>

<style scoped>

</style>