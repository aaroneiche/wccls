<template>
  <ul>
    <Item v-bind:key="s.isbn" v-for="s in set" 
      v-bind:title="s.title"
      v-bind:status="s.status"
      v-bind:background="s.background"
      v-bind:isbn="s.isbn"
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