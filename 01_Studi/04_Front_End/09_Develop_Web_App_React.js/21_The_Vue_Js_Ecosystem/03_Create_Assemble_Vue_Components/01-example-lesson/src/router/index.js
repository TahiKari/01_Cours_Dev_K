import { createRouter, createWebHistory } from 'vue-router'
import LevelPage from '../views/LevelPage.vue'
const routes = [
  {
    path: '/',
    name: 'Level Page',
    component: LevelPage
  },
  {
    path: '/habits',
    name: 'Habit Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HabitPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
