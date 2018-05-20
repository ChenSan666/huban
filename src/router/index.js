import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import App from '@/App'
import Find from '@/pages/Find'
import Search from '@/pages/Search'
// import Profile from '@/pages/Profile'
import UserSpace from '@/pages/UserSpace'
import Kind from '@/pages/Kind'
import Picture from '@/pages/Picture'
import Label from '@/pages/Label'
import Explore from '@/pages/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/home',

    }, {
      path: '/home',
      name: 'home_page',
      component: Home,
    }, {
      path: '/find',
      name: 'find_page',
      component: Find,
    }, {
      path: '/kind',
      name: 'kind_page',
      component: Kind,
    }, {
      path: '/user/:id',
      name: 'user_page',
      component: UserSpace,
    },{
      path: '/pic',
      name: 'picture_page',
      component: Picture,
    },{
      path: '/search',
      name: 'search_page',
      component: Search,
    },{
      path: '/label/:id',
      name: 'label_page',
      component: Label,
    },{
      path: '/explore/:urlname',
      name: 'explore_page',
      component: Explore,
    }

  ]
})
