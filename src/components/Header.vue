<template>
  <div id="header">
    <div id="logo" v-on:click="goHome"></div>
    <div id="title">Washington County Cooperative Library Services Catalog</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    goHome() {
      this.$router.push({ path: `/`});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}

#title {
  width: 450px;
  font-size: 20pt;
  text-align: right;
  }


#logo {
  background-image: url("../assets/wccls-logo.jpg");
  background-size: contain;
  height: 75px;
  width: 75px;
  cursor: pointer;
}

</style>
