import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import Cart from '../views/Cart.vue'
import Line from '../views/Line.vue'
import LineSport from '../views/LineSport.vue'
import LineSportMatch from '../views/LineSportMatch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/line',
    name: 'line',
    component: Line,
    props: true
  },
  {
    path: '/line/:name',
    component: LineSport,
    props: true
  },
  {
    path: '/line/:name/:id',
    component: LineSportMatch,
    props: true
  },
  {
    path: '/live/:name',
    component: Live,
    props: true
  },
  {
    path: '/live/:name/:id',
    component: LineSportMatch,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
