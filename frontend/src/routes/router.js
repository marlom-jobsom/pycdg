import Vue from 'vue'
import VueRouter from 'vue-router'

import AppTemplate from '@/components/AppTemplate.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Page404 from '@/pages/Page404.vue'

const routes = [
  {
    path: '/app',
    component: AppTemplate,
    children: [
      { path: '', component: Home },
    ],
  },
  { path: '/login', component: Login },
  { path: '/404', component: Page404 },

  // Default redirecting to home
  { path: '*', redirect: '/404' }
]

// Router Declaration
Vue.use(VueRouter)
const router = new VueRouter({routes})

// Router Guards
// TODO: Uncommented this block of code after implement the user validation token
// router.beforeEach((to, from, next) => {
//   const publicRoutes = [
//     '/login'
//   ]
//   // TODO: Implement the user login check
//   if (!publicRoutes.includes(to.path))
//     return next('/login')
  
//   return next()
// })

export default router