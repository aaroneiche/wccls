<template>
  <ul>
    <Item v-bind:key="s.isbn" v-for="s in search()" 
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
    search () {
      if(this.$root.$data.search.length > 0){
        return this.$root.$data.set.filter(e=>{
          return e.title.match(`/${this.$root.$data.search}/gi`) != null;
        });
      }else{
        return this.$root.$data.set;
      }

    }
  },
  components: {
    Item
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