import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // nanti tambahkan routes lain: /events, /struktur, /gallery, dsb
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
