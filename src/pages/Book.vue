<template>
  <div id="book">
    <div id="cover"></div>
    <div id="info">
      <h2 id="bookTitle"></h2>
      <h3 id="author"></h3>
      <div id="description"></div>
      <div class="status" v-on:click.stop="reserve"  v-bind:class="availableClass">{{reserveStatus}}</div>
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
      if(this.$root.$data.reservations.indexOf(this.book.isbn) != -1) {
        return "reserved"
      }else{
        return (this.status == 'available') ? "available" : "waitlist";
      }    },
    reserveStatus: function() {
      if(this.$root.$data.reservations.indexOf(this.book.isbn) != -1) {
        return "Remove from Reserved";
      }else{
        return (this.status == 'available') ? "Reserve this book" : "Add me to the waitlist";
      }
    }
  },
  methods: {
    setBook (){
      document.getElementById('cover').style.backgroundImage = `url(http://localhost:8080/${this.book.background})`;
      document.getElementById('bookTitle').innerHTML = this.book.title;
      document.getElementById('author').innerHTML = this.book.author;
      document.getElementById('description').innerHTML = this.book.description;
    },
    reserve() {
      if(this.$root.$data.reservations.indexOf(this.book.isbn) == -1 ){
        this.$root.$data.reservations.push(this.book.isbn);
        this.$forceUpdate();
      }else{
        //remove from reserved
        let thisBook = this.$root.$data.reservations.indexOf(this.isbn);
        this.$root.$data.reservations.splice(thisBook,1);
      }
    }
  },
  mounted() {
   this.book = this.$root.$data.set.find(b=> b.isbn == this.$route.params.book);
   this.setBook();
  },
}
</script>

<style scoped>
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
  cursor: pointer;
}

.status.available {
  background-color: seagreen;
}
.status.waitlist {
  background-color: firebrick;
}
.status.reserved {
  background-color: goldenrod;
}

</style>
    