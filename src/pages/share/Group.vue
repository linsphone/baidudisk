<template>
  <div class="group-wrapper">
    <div class="group-con">
      <div class="cloud">
        <img src="/static/img/cloud.png" alt="">
      </div>
      <p>您还没有加入群聊哦~</p>
      <a href="javascript:;" class="button">创建群组</a>
    </div>
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
  @import "../../assets/css/scss/index";
  .group-wrapper{
    height: 100%;
    background: #fff;
    z-index: 10;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    .group-con{
      text-align: center;
      .cloud{
        padding: 0 50px;
        margin-bottom: 42px;
      }
      p{
        color: #999;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 22px;
      }
      .button{
        display: inline-block;
        height: 34px;
        line-height: 34px;
        padding:  0 20px;
        margin: 0 auto;
        background: #0e8ee7;
        color: #fff;
        border-radius: 2px;
        font-size: 12px;
      }

    }
  }
</style>
