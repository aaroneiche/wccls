<template>
  <li>
    {{title}}
    
    <div class="status">
      {{status}}
    </div>
  </li>
</template>

<script>
export default {
  name:"Item",
  props: {
    title: String,
    background: String,
    status: String
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
  }

  .status {
    position: absolute;
    bottom: 20px;
    width: 100%;
    font-weight: bold;
    text-transform: capitalize;
  }

</style>