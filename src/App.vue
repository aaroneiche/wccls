<template>
  <div id="app">    
    <Header id="header"/>
    <Search id="search"/>
    <Items id="items" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Items from './components/Items.vue' 

export default {
  name: 'app',
  components: {
    Header,
    Search,
    Items
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
