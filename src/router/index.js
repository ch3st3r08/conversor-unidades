import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/vistaHome.vue'
import VistaConversorTiempo from '@/views/VistaConversorTiempo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/conversortiempo',
    name: 'VistaConversorTiempo',
    component: VistaConversorTiempo
  },
]

const router = new VueRouter({
  routes
})

export default router
