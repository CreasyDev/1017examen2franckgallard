<template>
  <div>
    <div id="navh">
      <!-- création des pages du menu via la directive v-for et affichage du menu  --> 
      <router-link v-for="item in menuList" :key="item.name" :to="item.path">
        {{ item.name | translate }}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
import { routes } from "../router/index.js";
import mixin from "../mixins/mixin.js";

export default {
  name: "Header",
  mixins: [mixin],
  data() {
    return {
      // Assignation de la variable 'menuList' avec les routes définies dans la constante 'routes'.
      menuList: routes,
    };
  },
};
</script>

<!-- Styles css applicable uniquement à vue 'Header.vue' --> 
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0083f5;
}
</style>
