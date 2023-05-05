import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import ('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import ('../components/EditComponent')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import ('../components/About')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../components/Contact')
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router