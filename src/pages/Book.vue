<template>
  <div id="Book">    
    this is a book.
    <div id="cover">

    </div>
    <div id="info">

    </div>
  </div>
</template>

<script>
// import Search from '@/components/Search.vue'
// import Items from '@/components/Items.vue' 

export default {
  name: 'book',
  components: {},
  data: function(){
    return {
      notify: false
    }
  },
  mounted() {
   console.log(this.$route.params.book);
   
  },
}
</script>

<style>
#book {
  display: flexbox;
  flex-direction: row;

}
</style>
    