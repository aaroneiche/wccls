<template>
  <li :style="{ backgroundImage:'url(' + background + ')' }">
    <!-- <div class="title">{{title}}</div> -->
    <div v-bind:class="avaiableClass" class="status">
      {{status}}
    </div>
    <div class="info">
      <div>{{title}}</div>
      <p>This is in the information available about the 
        thing.
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name:"Item",
  props: {
    title: String,
    background: String,
    status: String,
  },
  computed: {
    avaiableClass: function() {
     return (this.status == 'available') ? "available" : "waitlist";
    }
  }
}
</script>
<style scoped>
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
    width: 100%;
    font-weight: bold;
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