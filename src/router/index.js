import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MyHome.vue'
import GalleryPage from '../views/GalleryPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
