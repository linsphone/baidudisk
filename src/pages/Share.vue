<template>
  <div class="share">
    <div class="share-aside">
      <router-link tag="div" class="tab session" :to="{name: 'session'}">
        <i class="fa fa-comment-o"></i>
        <div class="text">会话</div>
      </router-link>
      <router-link tag="div" class="tab haoyou" :to="{name: 'haoyou'}">
        <i class="fa fa-user-o"></i>
        <div class="text">好友</div>
      </router-link>
      <router-link tag="div" class="tab share-group" :to="{name: 'group'}">
        <i class="fa fa-users"></i>
        <div class="text">群组</div>
      </router-link>
      <div class="tab add">
        <i class="fa fa-user-plus"></i>
      </div>
    </div>
    <div class="share-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/scss/index";

  .share {
    height: 100%;
    background: #fff;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    .share-aside {
      height: 100%;
      background: #505664;
      width: 60px;
      text-align: center;
      color: #fff;
      position: relative;

      .tab {
        width: 60px;
        height: 64px;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        &.session {
          /*background-image: url("/static/img/share-session.png");*/
          top: 66px;
        }
        &.haoyou {
          /*background-image: url("/static/img/share-haoyou.png");*/
          top: 140px;
        }
        &.share-group {
          /*background-image: url("/static/img/share-group.png");*/
          top: 212px;
        }
        &.add {
          /*background-image: url("/static/img/share-add.png");*/
          bottom: 0;
        }
        &:hover,&.router-link-active {
          color: #449922;
        }

      }
    }
    .share-wrapper {
      height: 100%;
      flex: 1;
      background: #fff;

    }

  }
</style>
