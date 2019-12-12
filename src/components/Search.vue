<template>
  <div>
    <input id="search" name="search" type="text" placeholder="Search here for available materials" 
      v-on:input="search"/>  
    
  </div>
</template>

<script>
  export default {
    name: 'Search',
    methods: {
      search() {
        //limit the books listed to a single search term
        this.$root.$data.search = document.getElementById("search").value;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    font-size: 14pt;
  }
</style>
