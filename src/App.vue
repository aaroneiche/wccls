<template>
  <div id="app">    
    <Notification id="notification" v-if="notify" v-bind:material="material"/> 
    <Header id="header"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Notification from './components/Notification.vue'

export default {
  name: 'app',
  components: {
    Header,
    Notification
  },
  computed: {
    notify(){
      return this.$root.$data.notification.visible
    },
    material() {
      return this.$root.$data.notification.material
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
  max-width: 640px;


  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
