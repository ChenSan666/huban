import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import App from '@/App'
import Find from '@/pages/Find'
// import Search from '@/pages/Search'
import Profile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/home',
    },{
      path: '/home',
      name: 'home_page',
      component: Home,
    },{
      path: '/find',
      name: 'find_page',
      component: Find,
    },{
      path: '/profile',
      name: 'profile_page',
      component: Profile,
    }
  ]
})
