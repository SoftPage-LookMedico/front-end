<script>

import {SuppliersService} from "../services/suppliers.service.js";

export default {
    name: "supplier-home-content",
    data(){
        return{
            id:"goldenostrich230",
            user: {},
            suppliersService: null
        }
    },
    created() {
        this.suppliersService= new SuppliersService();
        this.getSupplier();
    },
    methods:{
        getSupplier(){
            this.suppliersService.getById(this.id)
                .then(response =>{
                    console.log(response.data);
                    this.user = response.data;
                });
        }
    }
}
</script>

<template>
    <div class="flex inline-block mr-8 ml-8 pr-8 pl-8 justify-content-center" >
        <div class="m-0">
            <h1>Welcome!!!</h1>
            <pv-card style="text-align: left">
                <template #title>
                    <span> {{ user.name.last }}, </span>
                    <span> {{ user.name.first }}  </span>
                </template>
                <template #content >
                    <span class="material-icons m-2">mail</span>
                    <span>{{ user.email}}</span>
                    <br>
                    <span class="material-icons m-2">smartphone</span>
                    <span> {{user.phone }}</span>
                    <br>
                    <span class="material-icons m-2">flag</span>
                    <span>{{user.location.region}}, </span>
                    <span>{{user.location.district}}</span>

                </template>
                <template #footer>
                    <router-link :to="{ name:'supplier-personal-data', params:{id:JSON.stringify(this.id)}}">
                        <pv-button style="background: #0099AD; border: 2px solid #0099AD; border-radius: 6px"
                                   label="SEE MORE...">
                        </pv-button>
                    </router-link>
                </template>
            </pv-card>
        </div>
        <div>
            <img :src="user.picture.large">
        </div>
    </div>
    <br>
    <div class="description">
        <div class="card" style="text-align:left">
            <pv-panel header="Public Description" toggleable>
                <hr>
                <p class="m-0">
                    {{user.description}}
                </p>
            </pv-panel>
        </div>
    </div>
    <router-view></router-view>
</template>

<style scoped>
h1{
    font-size: 20px;
}

span{
    margin: 2px;
}

pv-button{
    background-color: #25c6db;
}

img{
    margin: 50px;
    padding-top: 80px;
}

div.description{
    margin-right: 350px;
    margin-left: 350px;
}

</style>
