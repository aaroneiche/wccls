<template>
  <div id="home">    
    <Search id="search"/>
    <Items id="items" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Items from '@/components/Items.vue' 

export default {
  name: 'home',
  components: {
    Search,
    Items
  },
  data: function(){
    return {
      notify: false
    }
  } 
}
</script>

<style>
#search{
  width: 100%;
}
</style>
    