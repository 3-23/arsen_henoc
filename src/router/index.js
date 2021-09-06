/*
App
Created at 09/04/2021 11:44
Author: Khaliq ALI
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import pathResolver from '@/plugins/loader'

Vue.use(VueRouter)

const routes = [
  {
    path: '/About',
    name: 'About',
    component: pathResolver('about', 'index')
  },
  {
    path: '/',
    name: 'Acceuil',
    component: pathResolver('accueil', 'index')
  },
  {
    path: '/couverture',
    name: 'couverture',
    component: pathResolver('couverture', 'index')
  },
  {
    path: '/engagement',
    name: 'engagement',
    component: pathResolver('engagement', 'index')
  },
  {
    path: '/questions',
    name: 'questions',
    component: pathResolver('questions', 'index')
  },
  {
    path: '/rembourse',
    name: 'rembourse',
    component: pathResolver('rembourse', 'index')
  },
  {
    path: '/Team',
    name: 'Team',
    component: pathResolver('Team', 'index')
  },
  {
    path: '/Text',
    name: 'Text',
    component: pathResolver('Text', 'index')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // retourner la position désirée
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
})

export default router
