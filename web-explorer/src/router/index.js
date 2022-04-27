import Vue from 'vue'
import VueRouter from 'vue-router'
import ExplorerIndex from '../Explorer/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ExplorerIndex',
    component: ExplorerIndex
  }
]

const router = new VueRouter({
  routes
})

export default router
