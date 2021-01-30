import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import WorkWith from '../views/WorkWith.vue'
import NotFound from '../views/NotFound.vue'


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
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/work-with',
    name: 'WorkWith',
    component: WorkWith
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
