import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/',
        component: () => import(/* webpackChunkName: "about" */ '../views/index1.vue')
      },
      {
        path:'/home/index1',
        component: () => import(/* webpackChunkName: "about" */ '../views/index1.vue')
      },
      {
        path:'/home/index2',
        component: () => import(/* webpackChunkName: "about" */ '../views/index2.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
