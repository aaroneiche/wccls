<template>
  <ul>
    <Item v-bind:key="s.isbn" v-for="s in filteredSet()" 
      v-bind:title="s.title"
      v-bind:status="s.status"
      v-bind:background="s.background"
      v-bind:isbn="s.isbn"
      v-bind:description="s.description"
      />
  </ul>
</template>
<script>
import Item from '@/components/Item.vue'
export default {
  name: "Items",
  data: function() {
    return {
     set: this.$root.$data.set 
    }
  },
  methods: {
    filteredSet () {
      if(this.$router.currentRoute.path == "/reservations") {
        return this.$root.$data.set.filter(e=>{
          return this.$root.$data.reservations.indexOf(e.isbn) != -1;
        });
      }else if(this.$root.$data.search.length > 0){
        return this.$root.$data.set.filter(e=>{
          let r = new RegExp(`${this.$root.$data.search}`, 'gi');
          return e.title.match(r) != null;
        });
      }else{
        return this.$root.$data.set.filter(e=>{
          return this.$root.$data.reservations.indexOf(e.isbn) == -1;
        })
      }
    },
  },
  components: {
    Item
  },
  mounted () {
    if(this.$router.currentRoute.path == "/reservations") {
      //filter the set
      // console.log("This is where we are.")
    }
  }
}
</script>
<style scoped>
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    list-style-type: none;
    padding: 0; 
  }
</style>