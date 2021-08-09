import Vue from 'vue'
import VueRouter from 'vue-router'

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
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
