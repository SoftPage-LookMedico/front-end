<script>
import FooterComponent from "./look-medico/components/footer.component.vue";
import HeaderContent from "./look-medico/components/header-content.component.vue";
import SideBarContent from "./public/pages/side-bar-content.component.vue";
import {RandomUsersApiService} from "./look-medico/services/random-user-api.services.js";


export default {
    name: 'App',
    components: {SideBarContent, HeaderContent, FooterComponent},

    data(){
        return{
            sidebarVisible: false,
        }
    },
    created() {
        console.log('created');
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        }
    }
}
</script>

<template>
  <div class="w-full">
          <pv-menubar class="pb-0 pt-0 w-full">
              <template #start>
                  <div class="flex inline-block justify-content-between align-items-center">

                      <div><pv-button icon="pi pi-bars" @click="toggleSidebar"></pv-button></div>

                      <header-content></header-content>

                  </div>

                  <side-bar-content v-model:visible="sidebarVisible"></side-bar-content>
              </template>
          </pv-menubar>


      <router-view></router-view>
      <footer-component></footer-component>
  </div>
</template>

<style scoped>

*{
    background-color: white;
    color: black;
}


</style>
