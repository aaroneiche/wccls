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
      set: [
        {
          isbn:"123456",
          title:"Book 1",
          status:"waitlist",
          background:"static/c1.jpg"
        },
        {
          isbn:"123457",
          title:"Book 2",
          status:"available",
          background:"static/c2.jpg"
        },
        {
          isbn:"123458",
          title:"Book 3",
          status:"waitlist",
          background:"static/c3.jpg"
        },
        {
          isbn:"123459",
          title:"Book 4",
          status:"available",
          background:"static/c2.jpg"
        },
        {
          isbn:"1234510",
          title:"Book 5",
          status:"available",
          background:"static/c3.jpg"
        },
        {
          isbn:"1234511",
          title:"Book 6",
          status:"waitlist",
          background:"static/c1.jpg"
        },
        {
          isbn:"1234512",
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