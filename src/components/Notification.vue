<template>
  <div class="notification">
    <p>You have been added to the waitlist for this material. We will notify you when it has been </p>
    <button id="action">  
      My Reservations
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #notification {
    max-width: 400px;
    width: 400px;
    height: 100px;
    background-color: white;
    position: absolute;
    z-index: 10;
    margin: 0 auto;
    align-self: center;
    top:10%;
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
    border-radius: 15px;

  }

</style>