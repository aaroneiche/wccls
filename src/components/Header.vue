<template>
    <div id="header">
      <input name="search" type="text" default="Robots" />
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

}


input {
  font-size: 24pt;
}
</style>
