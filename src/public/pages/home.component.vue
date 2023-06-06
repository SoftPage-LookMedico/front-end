<template>
    <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center" >
        <div class="m-0">
    <h1>Welcome!!!</h1>
    <h2>
        <span> {{ user.name.last }}, </span>
        <span> {{ user.name.first }}  </span>
    </h2>
            <pv-card>
                <template #content>
                    <ul >
                        <li>
                                <span class="material-icons m-2">mail</span>
                                <span>{{ user.email}}</span>
                        </li>
                        <li>
                                <span class="material-icons m-2">smartphone</span>
                                <span> {{user.phone }}</span>
                        </li>
                        <li>
                            <span class="material-icons m-2">flag</span>
                            <span>{{user.location.city}}, </span>
                            <span>{{user.location.country}}</span>
                        </li>
                    </ul>
                </template>
                <template #footer>
                </template>
            </pv-card>
        </div>
        <div>
            <img :src="user.picture.large">
        </div>
    </div>
    <div class="my-activity">
        <h3>MY ACITVITY</h3>
        <hr>
         <div class="activities">
                 <pv-card class="activity">
                     <template #content>
                         <div class="flex inline-block justify-content-between text-gray-700">
                 <span class="material-icons">shopping_bag</span>
                     <span>Shopping List</span>

                     <div>
                         <span>0</span>
                         <p>Supplier</p>
                     </div>

                     <div>
                         <span>0</span>
                         <p>Orders</p>
                     </div>

                     <div>
                        <pv-button>
                            START
                        </pv-button>
                     </div>
                         </div>
                     </template>

                 </pv-card>
             <pv-card class="activity">
                 <template #content>
                     <div class="flex inline-block justify-content-between">
                     <span class="material-icons text-red-500">favorite</span>
                     <span>Favorites</span>

                         <div>
                             <span>0</span>
                             <p>Supplier</p>
                         </div>

                         <div>
                             <span>0</span>
                             <p>Orders</p>
                         </div>

                         <div>
                             <pv-button>
                                 ENTER
                             </pv-button>
                         </div>

                     </div>
                 </template>



             </pv-card>

         </div>
    </div>
</template>

<script>

import {RandomUsersApiService} from "../../look-medico/services/random-user-api.services.js";

export default {
    name: "home",
    data(){
        return{
            user: [],
            errors: [],
            randomUserApi: new RandomUsersApiService()
        }
    },
    created() {
        console.log('created');
        this.getUser()
    },
    methods:{
        getUser(){
            this.randomUserApi.getUser()
                .then(response => {
                    this.user = response.data.results[0];
                    console.log(response.data.results[0])
                })
                .catch(error => {
                    this.errors.push(error);
                })
        }
    }
}
</script>

<style scoped>

h1{
    font-size: 20px;
}
pv-avatar{
    width: 100px;
}
ul{
    text-align: left;
    list-style-type: none;
    margin: 0;
}

div.activities{

    text-align: center;
}

span{
    margin: 2px;
}

pv-card.activity{
    border-color: dimgray;
    border-radius: 20px;
    border-style: solid;
    margin: 0px;
    padding: 0;
}

pv-card.activity template span{
    font-size: 50px;
    color: dimgray;
}

div.my-activity{
    text-align: left;
    margin-right: 200px;
    margin-left: 200px;

}

pv-button{
    background-color: #25c6db;
}

</style>