import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Congrats from '../views/Congrats.vue'

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/congrats',
    name: 'congrats',
    component: Congrats
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
