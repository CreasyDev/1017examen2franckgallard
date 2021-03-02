import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projet from '../views/Projet.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

// La constante 'routes' contient la liste de toutes les pages du menu du projet.
// Toute nouvelle page du menu doit etre déclarée ici.
export const routes = [
  {
    path: '/', // Le chemin ou lien d'accès de la page
    name: 'menuHome', // Le nom de la page. Doit être pareil que le nom déclaré dans l'objet json 'TRANSLATIONS' de traduction.
    component: Home // la page
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
