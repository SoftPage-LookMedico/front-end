<template>
    <h1>Personal Data</h1>
    <div class="personal">
    <h2>Information</h2>
    <div class="flex inline-block justify-content-between">
        <div>
    <p>
        <span class="atribute"><strong>Name: </strong></span>
        <br>
        <span>{{user.name.first}}</span>
    </p>

    <p>
        <span class="atribute"><strong>Last Name:</strong></span>
        <br>
        <span>{{user.name.last}}</span>
    </p>

        <p>
            <span class="atribute"><strong>Phone: </strong></span>
            <br>
            <span>{{user.phone}}</span>
        </p>

        <p>
            <span class="atribute"><strong>Email:</strong></span>
            <br>
            <span>{{user.email}}</span>
        </p>
        </div>
        <div class="m-8">
            <img :src="user.picture.large">
        </div>
    </div>
        <div class="location">
        <h3>Location</h3>
        <p>This allows you to show stores near your location</p>

        <h4>Country -->
        <span class="atribute">{{user.location.country}}</span>
        </h4>

        <p>
            <span class="atribute"><strong>Adress:</strong></span><br>
            <span>{{user.location.street.name}} {{user.location.street.number}}</span>
        </p>

        <p>
            <span class="atribute"><strong>City - State</strong></span><br>
            <span>{{user.location.state}}</span>
        </p>

        <p>
            <span class="atribute"><strong>Postal Code: </strong></span><br>
            <span>{{user.location.postcode}}</span>
        </p>
        </div>
    </div>

</template>

<script>
import {RandomUsersApiService} from "../../look-medico/services/random-user-api.services.js";

export default {
    name: "personal-data",
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
div.personal{
    padding: 10px 350px 10px 350px;
    text-align: left;
}

span{
    color: dimgray;
    border: dimgray;
    //border-style: solid;

    border-radius: 5px;
}

span.atribute{
    border: none;
    color: black;

    margin-bottom: 20px;
}

h1{
    margin: 10px;
    font-size: 40px;
}

</style>