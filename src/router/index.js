import { createRouter, createWebHistory } from 'vue-router'
import MandateView from '../views/MandateView.vue'
import BoardView from '../views/BoardView.vue'
import AccountView from '../views/AccountView.vue'

const routes = [
  
  {
    path: '/mandateView',
    name: 'mandateView',
    component: MandateView
  },
  {
    path: '/boardView',
    name: 'boardView',
    component: BoardView
  },
  {
    path: '/accountView',
    name: 'accountView',
    component: AccountView
  },

  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
