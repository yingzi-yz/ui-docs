<template>
  <div class="layout-container">
    <yz-container>
      <yz-header height="50px">
        yingzi-ui
      </yz-header>
      <yz-container>
        <yz-aside>
          <div class="link" v-for="(v, i) in asideList" :key="i" @click="$router.push({path: v.toRouter})">{{v.name}}</div>
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
  name: 'layout',
  data() {
    return {
      asideList: [{
        name: '安装',
        toRouter: '/'
      }, {
        name: 'container布局容器',
        toRouter: '/container'
      }, {
        name: 'button按钮',
        toRouter: '/button'
      }, {
        name: 'input输入框',
        toRouter: '/input'
      }, {
        name: 'radio单选框',
        toRouter: '/radio'
      }, {
        name: 'checkbox多选框',
        toRouter: '/checkbox'
      }, {
        name: 'switch开关',
        toRouter: '/switch'
      }, {
        name: 'datePicker日期选择',
        toRouter: '/datePicker'
      }, {
        name: 'form表单',
        toRouter: '/form'
      }, {
        name: 'pagination分页',
        toRouter: '/pagination'
      }, {
        name: 'message提示',
        toRouter: '/message'
      }, {
        name: 'confirm确认',
        toRouter: '/confirm'
      }, {
        name: 'notice通知',
        toRouter: '/notice'
      }, {
        name: 'tab选项卡',
        toRouter: '/tab'
      }, {
        name: 'dialog弹出框',
        toRouter: '/dialog'
      }, {
        name: 'card卡片',
        toRouter: '/card'
      }, {
        name: 'calendar日历',
        toRouter: '/calendar'
      }, {
        name: 'drawer抽屉',
        toRouter: '/drawer'
      },{
        name: 'collapse折叠',
        toRouter: '/collapse'
      }, {
        name: 'edit编辑框',
        toRouter: '/edit'
      }, {
        name: 'login登录框',
        toRouter: '/login'
      }, {
        name: 'preview预览',
        toRouter: '/preview'
      }, {
        name: 'tip文本',
        toRouter: '/tip'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  .yz-header {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    color: rgb(10, 133, 248);
  }
  .yz-aside {
    width: 233px!important;
    padding-top: 20px;
    .link {
      height: 43px;
      cursor: pointer;
      &:hover {
        color: rgb(10, 133, 248);
      }
    }
  }
  .yz-main {
    padding-top: 20px;
  }
}
</style>