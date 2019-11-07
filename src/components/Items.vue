<template>
  <ul>
    <Item v-bind:key="s.title" v-for="s in set" 
      v-bind:title="s.title"
      v-bind:status="s.status"
      v-bind:background="background"/>
  </ul>
</template>
<script>
import Item from '@/components/Item.vue'
export default {
  name: "Items",
  data: function() {
    return {
      set: [
        {
          title:"Book 1",
          background: "something",
          status:"reserved"
        },
        {
          title:"Book 2",
          background: "something",
          status:"available"
        },
        {
          title:"Book 3",
          background: "something",
          status:"reserved"
        },
        {
          title:"Book 4",
          background: "something",
          status:"available"
        },
        {
          title:"Book 5",
          background: "something",
          status:"available"
        },
        {
          title:"Book 6",
          background: "something",
          status:"reserved"
        },
        {
          title:"Book 7",
          background: "something",
          status:"reserved"
        }                        
      ]
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
    
  }
</style>