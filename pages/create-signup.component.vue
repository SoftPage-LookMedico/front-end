<template>
    <div>
        <div class="card">
            <pv-toolbar class="mb-4">
                <template #start>
                    <pv-button label="Sign Up"
                               class="p-button-success"
                               @click="openNew"></pv-button>
                </template>
            </pv-toolbar>

            <!-- Add/Edit Tutorial Dialog -->
            <pv-dialog v-model:visible="tutorialDialog"
                       :style="{width: '450px', height: '700px'}"
                       header="Sign Up"
                       :modal="true"
                       class="p-fluid">

                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="tutorial.FirstName"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !tutorial.FirstName}"/>
                      <label for="title">FirstName</label>
                      <small class="p-error" v-if="submitted && !tutorial.FirstName">FirstName is required.</small></span>
                </div>

                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="tutorial.lastName"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !tutorial.lastName}"/>
                      <label for="title">LastName</label>
                      <small class="p-error" v-if="submitted && !tutorial.lastName">LastName is required.</small></span>
                </div>

                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="email"
                                     v-model.trim="tutorial.email"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !tutorial.email}"/>
                      <label for="title">Email</label>
                      <small class="p-error" v-if="submitted && !tutorial.email">Email is required.</small></span>
                </div>

                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="password"
                                     v-model.trim="tutorial.password"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !tutorial.password}"/>
                      <label for="title">Password</label>
                      <small class="p-error" v-if="submitted && !tutorial.password">Password is required.</small></span>
                </div>

                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="tutorial.phone"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !tutorial.phone}"/>
                      <label for="title">Phone</label>
                      <small class="p-error" v-if="submitted && !tutorial.phone">Phone is required.</small></span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="tutorial.description"
                                     required="false"
                                     rows="2" cols="20"/>
                      <label for="description">Description</label>
                  </span>
                </div>

                <div class="field">
                    <pv-dropdown id="published"
                                 v-model="tutorial.status"
                                 :options="statuses"
                                 optionLabel="label"
                                 placeholder="Select your Workplace">
                        <template #value="slotProps">
                            <div v-if="slotProps.value && !slotProps.value.value">
                                <span :class="'tutorial-badge status-' + slotProps.value.toLowerCase()">
                                    {{ slotProps.value.label }}
                                </span>
                            </div>
                            <div v-else-if="slotProps.value && !slotProps.value.value">
                                <span :class="'tutorial-badge status-' + slotProps.value.toLowerCase()">
                                    {{ slotProps.value }}
                                </span>
                            </div>
                            <span v-else>{{ slotProps.placeholder }}</span>
                        </template>
                    </pv-dropdown>
                </div>

                <template #footer>
                    <pv-button :label="'Cancel'.toUpperCase()" icon="pi pi-times"
                               class="p-button-text"
                               @click="hideDialog"/>
                    <pv-button :label="'Save'.toUpperCase()" icon="pi pi-check"
                               class="p-button-text"
                               @click="saveTutorial"/>
                </template>
            </pv-dialog>



        </div>
    </div>
</template>

<script>
import {TutorialsApiService} from "../services/signup-api.service.js";
import {FilterMatchMode} from "primevue/api";

export default {
    name: "tutorial-list",
    title: "Tutorials",
    data() {
        return {
            tutorials: [],
            tutorialDialog: false,
            deleteTutorialDialog: false,
            deleteTutorialsDialog: false,
            tutorial: {},
            selectedTutorials: null,
            filters: {},
            submitted: false,
            statuses: [
                {label: "Hospital", value: "published"},
                {label: "Clinic", value: "unpublished"},
            ],
            tutorialsService: null,
        };

    },
    created() {
        console.log("created");
        this.tutorialsService = new TutorialsApiService();
        this.tutorialsService.getAll()
            .then((response) => {
                this.tutorials = response.data;
                this.tutorials.forEach((tutorial) =>
                    this.getDisplayableTutorial(tutorial));
                console.log(response);
            });
        console.log(this.tutorials);
        this.initFilters();
    },

    methods: {
        getDisplayableTutorial(tutorial) {
            tutorial.status = tutorial.published
                ? this.statuses[0].label
                : this.statuses[1].label;
            return tutorial;
        },
        getStorableTutorial(displayableTutorial) {
            return {
                id: displayableTutorial.id,
                FirstName: displayableTutorial.FirstName,
                lastName: displayableTutorial.lastName,
                email: displayableTutorial.email,
                password: displayableTutorial.password,
                phone: displayableTutorial.phone,
                description: displayableTutorial.description,
                published: displayableTutorial.status.label === "Hospital",
            }
        },
        openNew() {
            this.tutorial = {};
            this.submitted = false;
            this.tutorialDialog = true;
        },
        hideDialog() {
            this.tutorialDialog = false;
            this.submitted = false;
        },
        findIndexById(id) {
            console.log(`current id is ${id}`);
            return this.tutorials
                .findIndex((tutorial) => tutorial.id === id);
        },
        saveTutorial() {
            this.submitted = true;
            if (this.tutorial.FirstName.trim()&&
                this.tutorial.lastName.trim()&&
                this.tutorial.email.trim()&&
                this.tutorial.password.trim()&&
                this.tutorial.phone.trim()) {
                if (this.tutorial.id) {
                    console.log(this.tutorial);
                    this.tutorial = this.getStorableTutorial(this.tutorial);
                    this.tutorialsService
                        .update(this.tutorial.id, this.tutorial)
                        .then((response) => {
                            console.log(response.data.id);
                            this.tutorials[this.findIndexById(response.data.id)] =
                                this.getDisplayableTutorial(response.data);
                            this.$toast.add({
                                severity: "success",
                                summary: "Success",
                                detail: "Tutorial Updated",
                                life: 3000,
                            });
                            console.log(response);
                        });
                } else {
                    this.tutorial.id = 0;
                    console.log(this.tutorial);
                    this.tutorial = this.getStorableTutorial(this.tutorial);
                    this.tutorialsService.create(this.tutorial)
                        .then((response) => {
                            console.log(response.data.id);
                            this.tutorial = this.getDisplayableTutorial(response.data);
                            this.tutorials.push(this.getDisplayableTutorial(this.tutorial));
                            this.$toast.add({
                                severity: "success",
                                summary: "Success",
                                detail: "Tutorial Created",
                                life: 3000,
                            });
                            console.log(response);
                        });
                }
                this.tutorialDialog = false;
                this.tutorial = {};
            }
        },
        initFilters() {
            this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
        }
    }
}
</script>

<style scoped>

@media screen and (max-width: 960px) {
    :deep(.p-toolbar) {
        flex-wrap: wrap;

    }
}
</style>