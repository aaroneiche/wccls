<template>
  <div id="home">    
    <Items id="items" />
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
  methods: {
    goToReservation () {
      this.$router.push({ path: `/reservations`});
    }
  } 
}
</script>

<style>

#home {
  display: flex;
  flex-direction: column;
}

#search{
  width: 100%;
}
#buttonBar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;


}
</style>
    