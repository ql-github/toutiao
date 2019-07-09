// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from '@/view/login'

const router = new VueRouter({
  routes: [{name:'login',path:'/login',component:Login}]
})

export default router
