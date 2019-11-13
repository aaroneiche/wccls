<template>
  <div id="app">    
    <!-- <Notification id="notification"/> -->
    <Header id="header"/>
    <Search id="search"/>
    <Items id="items" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Items from './components/Items.vue' 
import Notification from './components/Notification.vue'

export default {
  name: 'app',
  components: {
    Header,
    Search,
    Items,
    Notification
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


  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
