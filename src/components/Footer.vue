<template>
  <div>
    <!-- Ajout de la directive 'footerDirective' -->
    <footer v-footerDirective></footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  directives: {
    // 'footerDirective' représente la directive personnalisée qui insère la date et le copyright dans le bas de page
    footerDirective: {
      inserted: function(el) {
        el.innerHTML =
          "Copyright © " +
          new Date().getUTCFullYear() +
          "- Franck Gallard - All rights reserved.";
      },
    },
  },
};
</script>

<style scoped>
footer {
  margin-top: 50px;
  bottom: 0;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
}
</style>
