import Vue from 'vue'
import Router from 'vue-router'
import cs from '@/views/cs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 按需加载
      component: () => import('@/views/home')
    },
    {
      path: '/myForm',
      component: () => import('@/views/user/myForm')
    },
    {
      path: '/cs',
      component: cs
    }

  ]
})
