import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import About from './views/About.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import skeletons from './routers/skeleton/index'
export default new Router({
  mode: 'history',
  base: '/seo/',
  routes: [
    ...skeletons,
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
