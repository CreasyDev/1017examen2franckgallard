<template>
  <div>
    <footer v-footerDirective></footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  directives: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
