import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetail from '../views/ProductDetail.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/products', name: 'products', component: ProductsPage },
  { path: '/product/:id', component: ProductDetail }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
