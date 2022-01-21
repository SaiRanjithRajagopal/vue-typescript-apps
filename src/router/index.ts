import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PassingProps from '../views/PassingProps.vue'
import Watchers from '@/views/Watchers.vue'
import PiniaStore from '@/views/PiniaStore.vue'
import Product from '@/views/Product.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: PassingProps
  },
  {
    path: '/twowaybinding',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TwoWayBinding.vue')
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers
  },
  {
    path: '/piniastate',
    name: 'piniastate',
    component: PiniaStore
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
