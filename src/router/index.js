import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/VistaHome.vue'
import VistaConversorTiempo from '@/views/VistaConversorTiempo.vue'
import VistaConversorMoneda from '@/views/VistaConversorMoneda.vue'
import VistaConversorMasa from '@/views/VistaConversorMasa.vue'
import VistaConversorLongitud from '@/views/VistaConversorLongitud.vue'

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
  {
    path: '/conversormoneda',
    name: 'VistaConversorMoneda',
    component: VistaConversorMoneda
  },
  {
    path: '/conversormasa',
    name: 'VistaConversorMasa',
    component: VistaConversorMasa
  },
  {
    path: '/conversorlongitud',
    name: 'VistaConversorLongitud',
    component: VistaConversorLongitud
  },
]


const router = new VueRouter({
  routes
})

export default router
