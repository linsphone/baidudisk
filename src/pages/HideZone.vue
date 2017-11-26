<template>
  <div class="hide-zone">
    <div class="open-zone">

      <div class="lock">
        <div class="suo-box">

        </div>
        <div class="info-suo">
          <h2>启用隐藏空间，保存你的私密文件吧~</h2>

          <p>
            <a class="btn-enable">启用隐藏空间</a> <a class="link">隐藏空间是什么? </a>
          </p>
        </div>
      </div>

      <p>小贴士:</p>
      <p>隐藏空间 的文件不支持分享给好友</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'hideZone',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/scss/index";
  .hide-zone{
    height: 100%;
    background: #fff;
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: center;
    .open-zone{
      height: 194px;
      width: 500px;

      .lock{
        display: flex;
        flex-flow: row nowrap;
        align-items:center;
        justify-content: flex-start;
        margin-bottom: 22px;
        .suo-box{
          width: 130px;
          height: 133px;
          background-image: url("/static/img/lock-zone.png");
        }

        .info-suo{
          flex: 1;
          height: 133px;
          padding-left: 43px;
          padding-top: 22px;


          h2{
            font-size: 19px;
            line-height: 24px;
            color: #3c6889;
            margin-bottom: 40px;
          }

          a.btn-enable{
            line-height: 47px;
            width: 170px;
            text-align: center;
            background: #66b82c;
            color: #fff;
            display: inline-block;
            border-radius: 6px;
            margin-right: 20px;
          }
          a.link{
            display: inline-block;
            vertical-align: bottom;
            text-decoration: underline;
            color: #98c8ed;
            font-size: 14px;
          }
        }
      }

      >p{
        line-height: 18px;
        font-size: 12px;
        color: #adadb4;
      }
    }
  }
</style>
