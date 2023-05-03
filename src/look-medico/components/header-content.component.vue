<template>
  <div>
      <pv-toolbar class="bg-white pb-0 pt-0 justify-content-between">
          <template #start>
              <img class="logo" src="../../assets/images/logo.png">
              <h3>| LookMedico <span class="space">---------------------------------------------------------------------------------------</span></h3>
          </template>
          <template #end>
              <div class="flex-column">
                  <router-link
                          v-for="item in items"
                          :key="item.label"
                          :to="item.to"
                          custom
                          v-slot="{navigate, href}"> <!--SON PROPIEDADES-->
                      <pv-button class="p-button-text  text-white"
                                 :href="href"
                                 @click="navigate">
                          <span class="material-icons">{{item.icon}}</span>
                          <span>{{item.label}}</span>
                      </pv-button>
                  </router-link>
              </div>
          </template>
      </pv-toolbar>
  </div>

</template>

<script>
export default {
    name: "header-content",
    data(){
        return {
            items: [
                { label: 'Market', icon: 'store', to: '/market'},
                { label: 'Shopping Chart', icon:'add_shopping_cart', to: '/shopping-chart'},
                { label: 'Notifications', icon:'notifications_active', to: '/notifications'},
                { label: 'User', icon:'person',to: '/user'}
            ]
        }
    }
}
</script>

<style scoped>
h3{
    color:black;
    font-size: 20px;
}

span{
    color: grey;
    font-size: 12px;
}

span.space{
    color:white;
}

.material-icons{
    font-size: 30px;
}

img.logo{
    width:80px;
    height: auto;
}



</style>