<template>
  <div id="home">    
    <!-- <Search id="search"/> -->
    <h2>My Reservations</h2>
    <Items id="items" v-if="hasReservedItems"/>
    <div v-else>
      You don't have any reserved items yet.
    </div>
  </div>
</template>

<script>
// import Search from '@/components/Search.vue'
import Items from '@/components/Items.vue' 

export default {
  name: 'home',
  components: {
    Items
  },
  data: function(){
    return {
      notify: false
    }
  },
  computed: {
    hasReservedItems: function () {
      return this.$root.$data.reservations.length > 0;
    }
  }
}
</script>

<style>
#search{
  width: 100%;
}
</style>
    