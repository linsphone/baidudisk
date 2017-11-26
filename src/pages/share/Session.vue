<template>
  <div class="session-wrapper">

    <div class="session-con">
      <div class="intro">
        <img src="/static/img/send.png" alt="">
      </div>
      <p>给好友分享上百张照片，仅需2不~</p>
      <a href="javascript:;" class="button">给好友分享文件</a>
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
  .session-wrapper{
    height: 100%;
    background: #fff;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .session-con {
      text-align: center;
      .intro{
        margin-bottom: 22px;
      }
      p{
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #999;
      }
      .button{
        display: inline-block;
        height: 34px;
        line-height: 34px;
        padding:  0 20px;
        margin: 22px auto 0;
        background: #0e8ee7;
        color: #fff;
        border-radius: 2px;
        font-size: 12px;
      }
    }
  }
</style>
