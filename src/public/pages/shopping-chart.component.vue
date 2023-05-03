<template>
    <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center" >
        <div class="m-0">
            <h2>Payment details</h2>
            <h2>E-wallet</h2>
            <pv-card class="activity">
                <template #content>
                    <div class="flex inline-block justify-content-between text-gray-700">
                        <span class="material-icons">paypal</span>
                        <span>Paypal</span>
                        <div>
                            <pv-button>ADD</pv-button>
                        </div>
                    </div>
                    <div>
                        <h3>1.Add a your paypal email address</h3>
                        <div>
                            <h4>Email address*</h4>
                            <h5>Amy.luisa02@gmail.com</h5>
                        </div>
                        <h3>2.Link automate payment</h3>
                        <div>
                            <h4>Choose*</h4>
                            <div>
                                <pv-button>Accept</pv-button>
                            </div>
                            <div>
                                <pv-button>Decline</pv-button>
                            </div>
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
    name: "shopping-chart"
}
</script>

<style scoped>

</style>