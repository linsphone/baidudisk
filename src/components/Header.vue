<template>
  <div class="header">
    <div class="user">
      <p class="ylogo">
        <img src="/static/img/yun-logo.png" alt=""> <span>百度云盘</span>
      </p>
      <div class="user-info">
        <span class="avatar">
          <img src="/static/img/user-avatar.png" alt="">
        </span>
        <div class="con">
          <p><span>db2phone</span><img src="/static/img/user-level.png" alt=""></p>
          <div class="use">
            <span>913.63GB/2057.00GB</span>
          </div>
        </div>

      </div>
    </div>
    <div class="nav-tools">
      <div class="tool active">
        <router-link :to="{name: 'myNetPan'}">
        <img src="/static/img/my-pan.png" alt="">
        <p>我的网盘</p>
        </router-link>
      </div>
      <div class="tool">
        <router-link :to="{name: 'share'}">
        <img src="/static/img/share.png" alt="">
        <p>分享</p>
        </router-link>
      </div>
      <div class="tool">
        <router-link :to="{name: 'hideZone'}">
        <img src="/static/img/hide-zone.png" alt="">
        <p>隐藏空间</p>
        </router-link>
      </div>
      <div class="tool">
        <router-link :to="{name: 'funPackage'}">
        <img src="/static/img/set-package.png" alt="">
        <p>功能宝箱</p>
        </router-link>
      </div>
    </div>
    <div class="mmm">
        <div class="micon">
          <a href="javascript:;" class="ling"></a>
        </div>
        <div class="micon">
          <a href="javascript:;" class="set"></a>
        </div>
        <div class="micon">
          <a href="javascript:;" class="min"></a>
        </div>
        <div class="micon">
          <a href="javascript:;" class="max"></a>
        </div>
        <div class="micon">
          <a href="javascript:;" class="close"></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/css/scss/index";
  .header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    background: #0696f5;

    .user{
      height: 98px;
      width: 300px;
      position: relative;
      .ylogo{
        margin-top: 6px;
        margin-left: 15px;
        margin-bottom: 9px;
        img{
          vertical-align: middle;
        }
        span{
          color: #fff;
          font-size: 12px;
        }
      }

      .user-info{
        margin-left: 15px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .avatar{
          width: 56px;
        }
        .con{
          height: 56px;
          padding-left: 10px;
          flex: 1;
          /*padding-left: 10px;*/
          p{
            margin-top: 6px;
            margin-bottom: 8px;
            color: #fff;
            font-size: 14px;
            letter-spacing: 1px;
            img{
              margin-left: 10px;
              vertical-align: middle;
            }
          }
          .use{
            position: relative;
            background-color: #2259ac;
            height: 14px;
            width: 138px;
            border-radius: 8px;
            font-size: 12px;
            span{
              position: absolute;
              top: 1px;
              left: 9px;
              z-index: 2;
              color: #fff;
            }
            &:before{
              content: "";
              position: absolute;
              display: block;
              background: #20be0d;
              width: 45%;
              height: 12px;
              border-radius: 8px;
              top: 1px;
              left: 1px;
            }
          }
        }
      }
    }
    .nav-tools{
      position: relative;
      width: 364px;
      height: 98px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      color: #fff;
      font-size: 12px;

      .tool{
        flex: 1;
        height: 98px;
        padding: 16px;
        text-align: center;
        a{
          color: #fff;
        }
        img{
          margin-bottom: 10px;
        }
        &.active{
          background: #3da5fc;
        }
        &:not(.active):hover{
          background: #4db1fc;
        }
      }
    }
    .mmm{
      flex: 1;
      position: relative;
      height: 98px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      .micon{
        position: relative;
        width: 30px;
        height: 18px;
        text-align: center;
        cursor: pointer;
        &:before{
          content: "";
          display: table;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 1px ;
          height: 18px;
          background: linear-gradient(to bottom,#155295,#90ccfb);
        }
        &:hover{
          background:linear-gradient(to bottom,rgba(255,255,255 ,0.5) ,rgba(255,255,255 ,0));
        }
        a{
          width: 14px ;
          height: 14px;
          background-size: 100% 100%;
          position: absolute;
          left: 8px;
          top: 3px;
        }
        a.ling{
          background: url("/static/img/ling.png") no-repeat ;
        }
        a.set{
          background: url("/static/img/set.png") no-repeat ;
        }
        a.min{
          background: url("/static/img/min.png") no-repeat ;
        }
        a.max{
          background: url("/static/img/max.png") no-repeat ;
        }
        a.close{
          background: url("/static/img/close.png") no-repeat ;
        }
      }
    }
  }
</style>
