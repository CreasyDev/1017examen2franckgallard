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
          "- Franck Gallard - All rights reserved.&nbsp;&nbsp; <a href='https://github.com/CreasyDev/1017examen2franckgallard/blob/main/LICENSE' target='_blank'>Legal - Policy</a>";
      },
    },
  },
};
</script>

<!-- Styles css applicable uniquement à vue 'Footer.vue' -->
<style scoped>
footer {
  margin-top: 50px;
  bottom: 0;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: #c7c7c7;
  color: black !important;
}
</style>
