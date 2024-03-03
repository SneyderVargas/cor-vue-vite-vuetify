import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayoutVue from '@/layouts/DefaultLayout.vue'
import BlankLayoutVue from '@/layouts/BlankLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: DefaultLayoutVue
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      layout: DefaultLayoutVue
      // layout: BlankLayoutVue
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//       meta:{
//         layout: mainVue
//       }
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//       meta:{
//         layout: mainVue
//       }
//     }
//   ]
// })
// export default router
