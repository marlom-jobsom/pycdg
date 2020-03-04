import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
]

Vue.use(VueRouter)

export default new VueRouter({routes})