<template>
  <div class="my-pan">
    this is myNetPan
  </div>
</template>

<script>
  export default {
    name: 'myPan',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/css/scss/index";
  .my-pan{
    height: 100%;
    background: #fff;
    position: relative;
  }
</style>
