import Vue from 'vue'
import Router from 'vue-router'
import cs from '@/views/cs'
import AddUser from '@/views/customers/addUser'
import CustomerDetails from '@/views/customers/customerDetails'
import Edit from '@/views/customers/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 主页
      path: '/',
      // 按需加载
      component: () => import('@/views/home')
    },
    {
      // 表单页
      path: '/myForm',
      component: () => import('@/views/user/myForm')
    },
    {
      // 测试路由
      path: '/cs',
      component: cs
    },
    {
      // customers addUser
      path: '/addUser',
      component: AddUser
    },
    {
      path: '/userList/:id',
      component: CustomerDetails
    },
    {
      path: '/edit/:id',
      component: Edit
    }

  ]
})
