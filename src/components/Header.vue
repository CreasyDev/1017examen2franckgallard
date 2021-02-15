<template>
  <div>
    <div id="nav">
      <router-link v-for="menu in menuList" :key="menu.name" :to="menu.path">
        {{ menu.name | translate }}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
      menuList: routes,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
