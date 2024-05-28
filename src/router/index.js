import { createRouter, createWebHistory } from 'vue-router'



import LoginVue from '@/views/view/Login.vue'

import index from '@/views/view/index.vue'

import home from '@/views/view/home.vue'

import Upload from '@/views/view/Upload.vue'

import Register from '@/views/view/Register.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {

      path:'/index',
      component: index
    },
    {

      path:'/login',
      component: LoginVue
    },
    {

      path:'/upload',
      component: Upload
    },
    {

      path:'/register',
      component: Register
    }
    
    
  ]
})

export default router
