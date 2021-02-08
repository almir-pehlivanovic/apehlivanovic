import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'About' */ '../views/About')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: 'Experience' */ '../views/Experience')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: 'Projects' */ '../views/Projects')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: 'Service' */ '../views/Service')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: 'Contact' */ '../views/Contact')
  },
  {
    path: '/work-with',
    name: 'WorkWith',
    component: () => import(/* webpackChunkName: 'WorkWith' */ '../views/WorkWith')
  },
  {
    path: '/contact/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: 'Success' */ '../views/Success')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: 'NotFound' */ '../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
