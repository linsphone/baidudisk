<template>
    <div class="container">
        <slot name="header"></slot>
        <main class="main">
            <slot></slot>
        </main>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  @import "../assets/css/scss/index";
  .container{
    height: 100%;
    .main{
      height: calc(100% - 98px);
    }
  }
</style>

