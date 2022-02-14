import Vue from 'vue'
import VueRouter from 'vue-router'

// 避免路由重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [{
      path: '',
      name: 'install',
      component: () => import('@/views/install.vue')
    }, {
      path: 'update',
      name: 'update',
      component: () => import('@/views/update.vue')
    }, {
      path: 'icon',
      name: 'icon',
      component: () => import('@/views/icon.vue')
    }, {
      path: 'container',
      name: 'container',
      component: () => import('@/views/container.vue')
    }, {
      path: 'button',
      name: 'button',
      component: () => import('@/views/button.vue')
    }, {
      path: 'input',
      name: 'input',
      component: () => import('@/views/input.vue')
    }, {
      path: 'radio',
      name: 'radio',
      component: () => import('@/views/radio.vue')
    }, {
      path: 'checkbox',
      name: 'checkbox',
      component: () => import('@/views/checkbox.vue')
    }, {
      path: 'switch',
      name: 'switch',
      component: () => import('@/views/switch.vue')
    }, {
      path: 'datePicker',
      name: 'datePicker',
      component: () => import('@/views/datePicker.vue')
    }, {
      path: 'form',
      name: 'form',
      component: () => import('@/views/form.vue')
    }, {
      path: 'pagination',
      name: 'pagination',
      component: () => import('@/views/pagination.vue')
    }, {
      path: 'message',
      name: 'message',
      component: () => import('@/views/message.vue')
    }, {
      path: 'confirm',
      name: 'confirm',
      component: () => import('@/views/confirm.vue')
    }, {
      path: 'notice',
      name: 'notice',
      component: () => import('@/views/notice.vue')
    }, {
      path: 'tab',
      name: 'tab',
      component: () => import('@/views/tab.vue')
    }, {
      path: 'dialog',
      name: 'dialog',
      component: () => import('@/views/dialog.vue')
    }, {
      path: 'card',
      name: 'card',
      component: () => import('@/views/card.vue')
    }, {
      path: 'calendar',
      name: 'calendar',
      component: () => import('@/views/calendar.vue')
    }, {
      path: 'drawer',
      name: 'drawer',
      component: () => import('@/views/drawer.vue')
    }, {
      path: 'collapse',
      name: 'collapse',
      component: () => import('@/views/collapse.vue')
    }, {
      path: 'edit',
      name: 'edit',
      component: () => import('@/views/edit.vue')
    }, {
      path: 'login',
      name: 'login',
      component: () => import('@/views/login.vue')
    }, {
      path: 'preview',
      name: 'preview',
      component: () => import('@/views/preview.vue')
    }, {
      path: 'tip',
      name: 'tip',
      component: () => import('@/views/tip.vue')
    }, {
      path: 'loading',
      name: 'loading',
      component: () => import('@/views/loading.vue')
    }, {
      path: 'breadcrumb',
      name: 'breadcrumb',
      component: () => import('@/views/breadcrumb.vue')
    }, {
      path: 'rate',
      name: 'rate',
      component: () => import('@/views/rate.vue')
    }, {
      path: 'colorBoard',
      name: 'colorBoard',
      component: () => import('@/views/colorBoard.vue')
    }, {
      path: 'inputNum',
      name: 'inputNum',
      component: () => import('@/views/inputNum.vue')
    }, {
      path: 'tooltip',
      name: 'tooltip',
      component: () => import('@/views/tooltip.vue')
    }, {
      path: 'sliderBar',
      name: 'sliderBar',
      component: () => import('@/views/sliderBar.vue')
    }, {
      path: 'progressBar',
      name: 'progressBar',
      component: () => import('@/views/progressBar.vue')
    }, {
      path: 'circleProgress',
      name: 'circleProgress',
      component: () => import('@/views/circleProgress.vue')
    }, {
      path: 'verifyBar',
      name: 'verifyBar',
      component: () => import('@/views/verifyBar.vue')
    }, {
      path: 'tableColor',
      name: 'tableColor',
      component: () => import('@/views/tableColor.vue')
    }, {
      path: 'tableList',
      name: 'tableList',
      component: () => import('@/views/tableList.vue')
    }, {
      path: 'tag',
      name: 'tag',
      component: () => import('@/views/tag.vue')
    }, {
      path: 'weekList',
      name: 'weekList',
      component: () => import('@/views/weekList.vue')
    }, {
      path: 'selectList',
      name: 'selectList',
      component: () => import('@/views/selectList.vue')
    }, {
      path: 'upload',
      name: 'upload',
      component: () => import('@/views/upload.vue')
    }, {
      path: 'treeList',
      name: 'treeList',
      component: () => import('@/views/treeList.vue')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
