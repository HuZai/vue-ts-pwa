import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import About from './views/About.vue'
import Test from './views/Test.vue'
import skeletons from './routers/skeleton/index'
import preview from './routers/preview'
export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/seo/' : '/',
  routes: [
    ...skeletons,
    ...preview,
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
