<template>
  <div id="header">
    <div id="logoBlock">
      <div id="logo" v-on:click="goHome"></div>
      <div id="title">Washington County Cooperative Library Services Catalog</div>
    </div>
    <Search v-if="isHome" id="search"/>
 
    <div id="buttonBar">
      <button id="homeButton" v-if="button" v-on:click="goHome">Go back to home</button>
      <button id="reserve" v-else v-on:click="goToReservation">Go to My Reservations</button>
    </div>
  </div>

</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components: {
    Search
  },
  props: {
    msg: String
  },
  computed: {
    button() {
      return this.$route.path == "/reservations";
    },
    isHome() {
      return this.$route.path == "/";
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: `/`});
    },
    goToReservation() {
      this.$router.push({ path: `/reservations`});
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header{
  display:flex;
  flex-direction: column;
}

#logoBlock {
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
