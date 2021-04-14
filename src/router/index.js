import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/HelloWorld'
import Home from '../views/Home.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})


// // import Home from '../views/Home.vue'
// import Home from '@/components/HelloWorld'
// import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
// //   {
// //     path: '/about',
// //     name: 'About',
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// //   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router

