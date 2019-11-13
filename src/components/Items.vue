<template>
  <ul>
    <Item v-bind:key="s.title" v-for="s in set" 
      v-bind:title="s.title"
      v-bind:status="s.status"
      v-bind:background="s.background"
      />
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
          status:"waitlist",
          background:"static/c1.jpg"
        },
        {
          title:"Book 2",
          status:"available",
          background:"static/c2.jpg"
        },
        {
          title:"Book 3",
          status:"waitlist",
          background:"static/c3.jpg"
        },
        {
          title:"Book 4",
          status:"available",
          background:"static/c2.jpg"
        },
        {
          title:"Book 5",
          status:"available",
          background:"static/c3.jpg"
        },
        {
          title:"Book 6",
          status:"waitlist",
          background:"static/c1.jpg"
        },
        {
          title:"Book 7",
          status:"waitlist",
          background:"static/c1.jpg"
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
    padding: 0; 
  }
</style>