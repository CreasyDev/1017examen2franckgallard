import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projet from '../views/Projet.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'menuHome',
    component: Home
  },
  {
    path: '/projets',
    name: 'menuProjects',
    component: Projet
  },
  {
    path: '/contact',
    name: 'menuContact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
