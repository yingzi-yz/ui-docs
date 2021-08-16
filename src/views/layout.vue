<template>
  <div class="layout-wrap">
    <yz-container>
      <yz-header height="50px">
        yingzi-ui
      </yz-header>
      <yz-container>
        <yz-aside class="aside">
          <div class="link" :class="{active: currentIndex == i}" v-for="(v, i) in asideList" :key="i" @click="clickAside(v, i)">{{v.name}}</div>
        </yz-aside>
        <yz-main>
          <router-view></router-view>
        </yz-main>
      </yz-container>
    </yz-container>
  </div>
</template>

<script>
export default {
  name: 'layoutWrap',
  data() {
    return {
      asideList: [{
        name: '安装',
        toRouter: '/'
      }, {
        name: '更新日期',
        toRouter: '/update'
      }, {
        name: 'icon图标',
        toRouter: '/icon'
      }, {
        name: 'button按钮',
        toRouter: '/button'
      }, {
        name: 'container布局容器',
        toRouter: '/container'
      }, {
        name: 'checkbox多选框',
        toRouter: '/checkbox'
      }, {
        name: 'confirm消息框',
        toRouter: '/confirm'
      }, {
        name: 'card卡片',
        toRouter: '/card'
      }, {
        name: 'calendar日历',
        toRouter: '/calendar'
      }, {
        name: 'collapse折叠框',
        toRouter: '/collapse'
      }, {
        name: 'datePicker日期选择器',
        toRouter: '/datePicker'
      }, {
        name: 'dialog弹出框',
        toRouter: '/dialog'
      }, {
        name: 'drawer抽屉',
        toRouter: '/drawer'
      }, {
        name: 'edit编辑框',
        toRouter: '/edit'
      }, {
        name: 'form表单',
        toRouter: '/form'
      }, {
        name: 'input输入框',
        toRouter: '/input'
      }, {
        name: 'login登录框',
        toRouter: '/login'
      }, {
        name: 'message消息',
        toRouter: '/message'
      }, {
        name: 'notice通知',
        toRouter: '/notice'
      }, {
        name: 'preview预览',
        toRouter: '/preview'
      }, {
        name: 'pagination分页',
        toRouter: '/pagination'
      }, {
        name: 'radio单选框',
        toRouter: '/radio'
      }, {
        name: 'switch开关',
        toRouter: '/switch'
      }, {
        name: 'tab选项卡',
        toRouter: '/tab'
      }, {
        name: 'tip文本',
        toRouter: '/tip'
      }],
      currentIndex: 0
    }
  },
  methods: {
    clickAside(v, i) {
      this.currentIndex = i;
      this.$router.push({path: v.toRouter});
    },
    getCurrentIndex() {
      let path = this.$route.fullPath;
      let index = this.asideList.findIndex(item => {
        return item.toRouter == path;
      })
      this.currentIndex = index;
    },
    toAsideDistance() {
      let distance = this.currentIndex * 43;
      let aside = document.getElementsByClassName('aside');
      aside[0].scrollTop = distance;
    }
  },
  created() {
    this.getCurrentIndex();
  },
  mounted() { 
    this.toAsideDistance();
  }
}
</script>

<style lang="scss" scoped>
.layout-wrap {
  height: 100%;
  .yz-header {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    color: rgb(10, 133, 248);
  }
  .yz-aside {
    width: 252px!important;
    padding-top: 20px;
    .link {
      height: 43px;
      cursor: pointer;
      &:hover {
        color: rgb(10, 133, 248);
      }
    }
    .active {
      color: rgb(10, 133, 248);
    }
  }
  .yz-main {
    padding-top: 20px;
  }
}
</style>