import { createRouter, createWebHistory } from 'vue-router'
import ShopMainPage from "@/components/home/ShopMainPage.vue";
import CheckoutPage from "@/components/checkout/CheckoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopMainPage
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage
    }
  ]
})

export default router
