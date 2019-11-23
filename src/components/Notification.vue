<template>
  <div class="notification">
    <p>You have been added to the waitlist for {{this.material}}. We will notify you when it has been </p>
    <div>
      <button id="reserve">Go to My Reservations</button>
      <button id="close" v-on:click="closeNotification">Close</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    material: String
  },
  methods: {
    closeNotification () {
      this.$root.$data.notification.visible = false;
    }
  }
}
</script>

<style>
  #notification {
    max-width: 400px;
    width: 400px;
    height: 100px;
    background-color: white;
    position: absolute;
    z-index: 20;
    margin: 0 auto;
    align-self: center;
    top:20%;
    border-radius: 15px;
    border-color: #C4D03C;
    border-width: 3px;
    border-style: solid;
    color: #006cA7;
    
    box-sizing: border-box;
    display: flex;    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  button {
    border-radius: 10px;
    height: 30px;
    width: 85px;
    margin-top: 5px;
    color: #006cA7;
    border-color: #C4D03C;
    font-weight: bold;
  }

</style>