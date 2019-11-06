<template>
  <div id="header">
    <div id="logo">Logo</div>
    <div id="title">Title</div>
  </div>    
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
