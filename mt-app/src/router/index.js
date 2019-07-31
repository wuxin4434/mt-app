import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import Index from '@/page/index'
import changeCity from '@/page/changeCity'
import goodsList from '@/page/goodsList'
import blankPage from '@/layout/blank'
import Login from '@/page/login'
import Register from '@/page/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: 'index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: changeCity
    }, {
      path: 's/:name',
      name: 'goods',
      component: goodsList
    }]
  }, {
    path: '/blank',
    name: 'index',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }]
})
