<template>
  <div id="book">
    <div id="cover"></div>
    <div id="info">
      <h2 id="bookTitle"></h2>
      <h3 id="author"></h3>
      <div id="description"></div>
      <div class="status" v-bind:class="availableClass">{{reserveStatus}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'book',
  components: {},
  data: function(){
    return {
      book: {},
      notify: false
    }
  },
  computed: {
    availableClass: function() {
      return (this.book.status == 'available') ? "available" : "waitlist";
    },
    reserveStatus: function() {
      return (this.book.status == 'available') ? "Reserve" : "Waitlist";
    }
  },
  methods: {
    setBook (){
      document.getElementById('cover').style.backgroundImage = `url(http://localhost:8080/${this.book.background})`;
      document.getElementById('bookTitle').innerHTML = this.book.title;
      document.getElementById('author').innerHTML = this.book.author;
      document.getElementById('description').innerHTML = this.book.description;
    }
  },
  mounted() {
   console.log();
   this.book = this.$root.$data.set.find(b=> b.isbn == this.$route.params.book);
   this.setBook();
  },
}
</script>

<style>
#book {
  display: flex;
  flex-direction: row;
  width: 650px;
  margin-top: 50px;
}
#cover {
  height: 500px;
  max-width: 60%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 60%;
}
#info {
  position: relative;
  width: 40%;
}

.status {
  position: absolute;
  bottom: 20px;
  width: 100%;
  font-weight: bold;
  font-size: 18pt;
  text-transform: capitalize;
  color: white;
  margin-left:-10px;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 12;
}

.status.available {
  background-color: seagreen;
}
.status.waitlist {
  background-color: firebrick;
}

</style>
    