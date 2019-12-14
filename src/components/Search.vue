<template>
  <div>
    <input id="search" name="search" type="text" placeholder="Search here for available materials" 
      v-on:input="search" v-model="searchTerm"/>  
    
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        searchTerm:""
      }
    },
    methods: {
      search() {
        //limit the books listed to a single search term
        // this.$root.$data.search = document.getElementById("search").value;
        this.$root.$data.search = this.searchTerm;
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
