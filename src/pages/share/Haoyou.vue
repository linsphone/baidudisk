<template>
  <div class="frineds-wrapper">
    <div class="mail">
      <ul class="mail-list">
        <li class="item" v-for="(user,index) in userList" :key="index">
          <img src="/static/img/face.png" alt="">
          <span class="fri-name">{{user}}</span>
        </li>
      </ul>
    </div>
    <div class="mail-detail">

      <div class="user-main">
        <div class="user-summary">
          <div class="portrait">
            <img src="/static/img/detail-face.png" alt="">
          </div>
          <p>刘 卫卫</p>
        </div>
        <div class="user-detail">
          <div class="control">
            <label>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</label><span>刘 卫卫</span>
          </div>
          <div class="control">
            <label>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</label><span>conderpath</span>
          </div>
          <div class="control">
            <label>百度帐号：</label><span>Jav****ipt</span>
          </div>
        </div>
        <div class="user-btn">
          <div class="btn btn-share">分享文件</div>
          <div class="btn">删除好友</div>
          <div class="btn">加入黑名单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myPan',
    data () {
      return {
        userList: [
          'db2phone',
          'fi***09',
          'Jav****ipt',
          '冯欢',
          '刘 会迁',
          '刘 卫卫',
          '张 宗鹏',
          '敖 兵',
          '朱 圣臣',
          '李 成伟',
          '李 龙龙',
          '王 金哲',
          '胡 月颖',
          '谢 荣晓',
          '金 硕',
          '陈 聪',
          '陈卫强'
        ],
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/css/scss/index";
  .frineds-wrapper{
    height: 100%;
    background: #fff;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    .mail{
      width: 241px;
      height: inherit;
      overflow-y: auto;
      border-right: 1px solid #e5e5e5;
      .mail-list{
        width: 222px;
        .item{
          padding: 10px 0 9px 16px;
          border-bottom: 1px solid #e5e5e5;
          img{
            vertical-align: middle;
          }
          .fri-name{
            margin-left: 12px;
            vertical-align: middle;
            display: inline-block;
            font-size: 14px;
          }
        }
      }
    }
    .mail-detail{
      flex: 1;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      .user-main{

        .user-summary{
          padding-bottom: 16px;
          border-bottom: 1px dashed  #dedede;
          .portrait{
            margin: 0  110px 6px;
          }
          p{
            text-align: center;
            font-size: 14px;
            line-height: 18px;
          }
        }
        .user-detail{
          margin-top: 14px;
          .control{
            label{
              width: 146px;
              text-align: right;
            }
            label,span{
              display: inline-block;
              line-height: 28px;
            }
          }
        }

        .user-btn{
          padding-top: 18px;

          .btn{
            border-radius: 4px;
            border: 1px solid #e2e2e2;
            width: 266px;
            margin: 0 auto 6px;
            line-height: 34px;
            text-align: center;
            color: #000;
            font-size: 12px;
            &.btn-share{
              color: #fff;
              background: #0e8ee7;
            }
          }
        }
      }

    }

  }
</style>
