<script>
import {SuppliersService} from "../services/suppliers.service.js";


export default {
    name: "supplier-personal-data",
    data(){
        return{
            id: JSON.parse(this.$route.params.id),
            user: {},
            editUser: {},
            suppliersService: null,
            editDialog: false,
            submitted: false,
        }
    },
    created() {
      this.suppliersService = new SuppliersService();
      this.getUser();
    },
    methods:{
        getUser(){
          this.suppliersService.getById(this.id)
              .then(response =>{
                  console.log(response.data)
                  this.user = response.data;
              })
        },

        openDialog(){
            this.editUser = {};
            this.editDialog = true;
            this.submitted = false;
        },

        hideDialog(){
            this.editDialog = false;
            this.submitted = false;
        },

        editSupplier(supplier) {
            console.log(supplier);
            this.editUser = { ...supplier };
            console.log(this.user);
            this.editDialog = true;
        },

        saveSupplier(){
            this.submitted = true;
            if(this.editUser.name.first.trim()){
                console.log(this.editUser)
                this.suppliersService
                    .update(this.editUser.id, this.editUser)
                    .then((response) => {
                        console.log(response.data.id);

                        this.$toast.add({
                            severity: "success",
                            summary: "Successful",
                            detail: "Data Updated",
                            life: 3000,
                        });

                        console.log(response);
                    });

                this.editDialog = false;
                this.user = this.editUser;
                this.editUser = {};
            }
        },

        isEmailValid() {
            // Expresión regular para validar el formato de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.editUser.email);
        }

    }
}
</script>

<template>
    <div class="flex inline-block justify-content-center align-items-center">
        <router-link :to="{name:'supplier-home', params:{id:JSON.stringify(this.id)}}">
            <pv-button style="background: #0099AD; border: 2px solid #0099AD; border-radius: 6px; margin: 5px"
                       icon="pi pi-arrow-left">
            </pv-button>
        </router-link>
        <h1>Personal Data</h1>
    </div>
    <div class="personal">
        <h2>Information</h2><br>
        <div class="flex inline-block justify-content-between">
            <div>
                <p>
                    <span class="atribute"><strong>Name: </strong></span>
                    <br>
                    <span>{{user.name.first}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Last Name:</strong></span>
                    <br>
                    <span>{{user.name.last}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Phone: </strong></span>
                    <br>
                    <span>{{user.phone}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Email:</strong></span>
                    <br>
                    <span>{{user.email}}</span>
                </p>
            </div>
            <div>
                <img :src="user.picture.large">
            </div>
        </div>
        <div class="location"><br>
            <h3>Location</h3>
            <p>This allows you to show stores near your location</p>
            <br>
            <p>
                <span class="atribute"><strong>Address:</strong></span><br>
                <span>{{user.location.street.name}} {{user.location.street.number}}</span>
            </p>
            <br>
            <p>
                <span class="atribute"><strong>Region - District</strong></span><br>
                <span>{{user.location.region}} - {{user.location.district}}</span>
            </p>
            <br>
            <p>
                <span class="atribute"><strong>Postal Code: </strong></span><br>
                <span>{{user.location.postcode}}</span>
            </p>
        </div>
        <div style="text-align: right">
            <!--EDIT PERSONAL DATA-->
            <pv-button style="background: #0099AD;border: 2px solid #0099AD;border-radius: 6px;margin: 10px"
                       icon="pi pi-pencil"
                       label="EDIT"
                       @click="editSupplier(user)">
            </pv-button>

            <router-link :to="{name: 'supplier-business-information', params: {id:JSON.stringify(this.id)}}">
                <pv-button style="background: #0099AD; border: 2px solid #0099AD; border-radius: 6px; margin: 10px"
                           label="NEXT">
                </pv-button>
            </router-link>
            <router-view></router-view>
            <pv-dialog
                    v-model:visible="editDialog"
                    :style="{ width: '450px' }"
                    header="Personal Data"
                    :modal="true"
                    class="p-fluid">

                <!--FIRST NAME--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="first"
                            v-model.trim="editUser.name.first"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.name.first}">
                    </pv-input-text>
                    <label for="first">First Name</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.name.first">
                    </small>
                </span>
                </div>

                <!--LAST NAME--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="last"
                            v-model.trim="editUser.name.last"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.name.last}">
                    </pv-input-text>
                    <label for="first">Last Name</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.name.last">
                    </small>
                </span>
                </div>

                <!--EMAIL-->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="email"
                            id="email"
                            v-model.trim="editUser.email"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.email && !isEmailValid}">
                    </pv-input-text>
                    <label for="first">Email</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.email && !isEmailValid">
                    </small>
                </span>
                </div>

                <!--PHONE--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="tel"
                            id="phone"
                            v-model.trim="editUser.phone"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.phone}">
                    </pv-input-text>
                    <label for="first">Phone</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.phone">
                    </small>
                </span>
                </div>

                <!--LOCATION REGION--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="region"
                            v-model.trim="editUser.location.region"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.location.region}">
                    </pv-input-text>
                    <label for="first">Region</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.location.region">
                    </small>
                </span>
                </div>

                <!--LOCATION DISTRICT--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="district"
                            v-model.trim="editUser.location.district"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.location.district}">
                    </pv-input-text>
                    <label for="first">District</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.location.district">
                    </small>
                </span>
                </div>

                <!--STREET NAME--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="street.name"
                            v-model.trim="editUser.location.street.name"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.location.street.name}">
                    </pv-input-text>
                    <label for="first">Street Name</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.location.street.name">
                    </small>
                </span>
                </div>

                <!--STREET NUMBER--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="number"
                            id="street.number"
                            v-model.trim="editUser.location.street.number"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.location.street.number}">
                    </pv-input-text>
                    <label for="first">Street Number</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.location.street.number">
                    </small>
                </span>
                </div>

                <!--POST CODE--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="number"
                            id="postcode"
                            v-model.trim="editUser.location.postcode"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.location.postcode}">
                    </pv-input-text>
                    <label for="first">Post Code</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.location.postcode">
                    </small>
                </span>
                </div>

                <template #footer>
                    <pv-button
                            :label="'Cancel'.toUpperCase()"
                            icon="pi pi-times"
                            class="p-button-text"
                            @click="hideDialog"
                    />
                    <pv-button
                            :label="'Save'.toUpperCase()"
                            icon="pi pi-check"
                            class="p-button-text"
                            @click="saveSupplier"
                    />
                </template>

            </pv-dialog>
        </div>
    </div>
</template>

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
    font-weight: bold;
    margin-bottom: 20px;
}

h1{
    margin: 10px;
    padding: 0;
    font-size: 40px;

    font-style: normal;
    font-weight: bold;
    line-height: 150%;
    /* or 38px */

    letter-spacing: -0.019em;

    color: #000000;
}

h2{
    padding: 0;
    margin: 0;
}

h3{
    padding: 0;
    margin: 0;
}

p{
    margin: 0;
    padding: 0;
}

</style>
