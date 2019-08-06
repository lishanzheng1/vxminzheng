import Vue from 'vue'
import Router from 'vue-router'

import Login from '../src/page/login/Login'
import Index from '../src/page/index/Index'
import UpdatePassword from '../src/page/updatePassword/UpdatePassword'
import Submit from '../src/page/messageSubmit/Submit'
import Collection from '../src/page/colleciton/Collection'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'login',
      component: Index
    },
    {
      path: '/home/updatepassword',
      name: 'login',
      component: UpdatePassword
    },
    {
      path: '/home/submit',
      name: 'submit',
      component: Submit
    },
    {
      path: '/home/collection',
      name: 'collection',
      component: Collection
    },

  ]
})
