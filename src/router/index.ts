import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import(/* webpackChunkName: "about" */ '../views/Training.vue')
  },
  {
    path: '/segments',
    name: 'Segments',
    component: () => import(/* webpackChunkName: "about" */ '../views/Segments.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercises.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/segments/create',
  //   name: "CreateSegment",
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Segment/Create.vue')
  // },
  {
    path: '/segments/edit/:id?',
    name: "EditSegment",
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../components/Segment/Create.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
