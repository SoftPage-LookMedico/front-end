<template>
    <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center" >
        <div class="m-0">
            <h1>Payment Methods</h1>
            <h2>Cards</h2>
            <pv-card class="activity">
                <template #content>
                    <div class="flex inline-block justify-content-between text-gray-700">
                        <span class="material-icons">payments</span>
                        <span>Credit Cards</span>
                        <div>
                            <pv-button>ADD</pv-button>
                        </div>
                    </div>
                    <div>
                        <h3>1.Add a credit/debit card information</h3>
                        <div>
                            <h4>Card details*</h4>
                            <h5>4580 1600 2854 8962</h5>
                            <h4>Expiry date*</h4>
                            <h5>24/12</h5>
                            <h4>CVC*</h4>
                            <h5>***</h5>
                            <h4>Cardholder name*</h4>
                            <h5>Amy Gutierrez</h5>
                        </div>

                        <h3>2.Add your billing address</h3>
                        <div>
                            <h4>Country*</h4>
                            <h5>Choose Country</h5>
                            <h4>City*</h4>
                            <h5>City</h5>
                            <h4>State/Province</h4>
                            <h5>State/Province</h5>
                            <h4>ZIP code*</h4>
                            <h5>Zip code</h5>
                        </div>
                        `
                    </div>

                </template>


            </pv-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "market"
}
</script>

<style scoped>

</style>