<template>
  <div class="fun-package">



    <div class="pack-container">
      <h3 class="ptitle">功能宝箱</h3>
      <h6 class="desc">更多功能,带给您更贴心的体验</h6>
      <ul class="fkuas">
        <li>
          <div class="icon icon-phone">
          </div>
          <div class="con">
            <h3>手机忘带</h3>
            <p>轻松开来电，短信</p>
          </div>
        </li>
        <li>
          <div class="icon icon-data-line">
          </div>
          <div class="con">
            <h3>数据线</h3>
            <p>手机和电脑无线传输</p>
          </div>
        </li>
        <li>
          <div class="icon icon-backup">
          </div>
          <div class="con">
            <h3>自动备份</h3>
            <p>随时备份告别丢失</p>
          </div>
        </li>
        <li>
          <div class="icon icon-lese">
          </div>
          <div class="con">
            <h3>回收站</h3>
            <p>帮你找回删除文件</p>
          </div>
        </li>
        <li>
          <div class="icon icon-lock">
          </div>
          <div class="con">
            <h3>锁定网盘</h3>
            <p>阻止他人偷窥数据</p>
          </div>
        </li>
        <li>
          <div class="icon icon-phone">
          </div>
          <div class="con">
            <h3>手机忘带</h3>
            <p>轻松开来电，短信</p>
          </div>
        </li>
        <li>
          <div class="icon icon-data-line">
          </div>
          <div class="con">
            <h3>数据线</h3>
            <p>手机和电脑无线传输</p>
          </div>
        </li>
        <li>
          <div class="icon icon-backup">
          </div>
          <div class="con">
            <h3>自动备份</h3>
            <p>随时备份告别丢失</p>
          </div>
        </li>
        <li>
          <div class="icon icon-lese">
          </div>
          <div class="con">
            <h3>回收站</h3>
            <p>帮你找回删除文件</p>
          </div>
        </li>
        <li>
          <div class="icon icon-lock">
          </div>
          <div class="con">
            <h3>锁定网盘</h3>
            <p>阻止他人偷窥数据</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
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

  .fun-package{
    min-height: 100%;
    overflow:auto;
    background: #fff;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .pack-container{


      width: 774px;
      height: 270px;
      /*background: red;*/
      .fkuas{
        li{
          float: left;
          margin-right:12px ;
          margin-bottom:12px ;
          height: 124px;
          border:1px solid #e2e2e2;
          width: 250px;
          background: #f1f1f1;
          &:nth-of-type(3n){
            margin-right:0 ;
          }
          &:hover{
            background: #ecf7ff;
            border-color: #4fb6fe;
          }
          padding-top:20px;
          padding-left: 15px;
          .icon{
            float: left;
            width: 81px;
            height: 81px;
            margin-right: 16px;
            &.icon-phone{
              background-image: url("/static/img/wjphone.png");
            }
            &.icon-data-line{
              background-image: url("/static/img/data-line.png");
            }
            &.icon-backup{
              background-image: url("/static/img/backup.png");
            }
            &.icon-lese{
              background-image: url("/static/img/lese.png");
            }
            &.icon-lock{
              background-image: url("/static/img/lock.png");
            }
          }
          .con{
            width: 135px;
            float: left;
            padding-top: 18px;
            >h3{
              font-size: 18px;
              color: #333333;
              line-height: 26px;
              margin-bottom: 6px;
            }
            > p{
              font-size: 12px;
              color: #999999;
              line-height: 20px;
            }
          }
        }
      }

    }
    h3.ptitle{
      position: absolute;
      top: 35px;
      left: 50%;
      margin-left: -46px;
      text-align: center;
      font-size: 22px;
      line-height: 28px;
      color: #333;
    }
    h6.desc{
      position: absolute;
      top: 70px;
      left: 50%;
      margin-left: -96px;
      color: #999;
      text-align: center;
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>
