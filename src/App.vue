<template>
  <div id="app">    
    <Notification id="notification" v-if="notify" />
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
  },
  data: function(){
    return {
      notify: false
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
