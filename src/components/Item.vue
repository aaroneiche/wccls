<template>
  <li :style="{ backgroundImage:'url(' + background + ')'}" v-on:click="moreInfo" >
    <!-- <div class="title">{{title}}</div> -->
    <div class="info">
      <div>{{title}}</div>
      <p>{{description}}
      </p>
    </div>
    <div v-bind:class="availableClass" class="status"
      v-on:click.stop="reserve">
      {{reserveStatus}}
    </div>
  </li>
</template>

<script>

// import router from "@/router.js";

export default {
  name:"Item",
  props: {
    title: String,
    background: String,
    status: String,
    isbn: String,
    description: String
  },
  computed: {
    availableClass: function() {
     return (this.status == 'available') ? "available" : "waitlist";
    },
    reserveStatus: function() {
      if(this.$root.$data.reservations.indexOf(this.isbn) != -1) {
        return "Reserved";
      }else{
        return (this.status == 'available') ? "Reserve this book" : "Add me to the waitlist";
      }
    }
  },
  methods: {
    moreInfo() {
      this.$router.push({ path: `materials/${this.isbn}`});
      
    },
    reserve() {
      if(this.$root.$data.reservations.indexOf(this.isbn) == -1 ){
        this.$root.$data.reservations.push(this.isbn);
        this.$root.$data.notification.visible = true;
        this.$root.$data.notification.material = this.title;
        this.$forceUpdate();
      }
      //Alert the user!
    }
  }

}
</script>
<style >
  li {
    position: relative;
    height: 300px;
    width: 200px;
    margin-bottom: 10px;

    border: solid black 3px;
    border-radius: 15px;
    box-sizing: border-box;
    padding:10px;
    background-size: cover;
    cursor: pointer;
  }

  li:hover .info {
    display: block;
  }

  .info {
    display:none;
    background-color: rgba(255,255,255,0.9);
    margin: -10px;
    border-radius: 12px;
    height: 295px;
    z-index: 11;
    position: relative;
  }

  .title{
    font-size: 2em;
    text-align: left;
    font-weight: bold;
  }

  .status {
    position: absolute;
    bottom: 20px;
    font-weight: bold;
    font-size: 12pt;
    text-transform: capitalize;
    color: white;

    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    z-index: 12;
    border-radius: 10px;
    padding: 3px;

  }


  .status.available {
    background-color: seagreen;
  }
  .status.waitlist {
    background-color: firebrick;
  }


</style>