import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import FormAdd from '../views/FormAdd.vue'
import FormEdit from '../views/FormEdit.vue'
import DeleteSales from '../views/DeleteSales.vue'
import Products from '../views/Products.vue'
import Report from '../views/Report.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addSales',
    name: 'addSales',
    component: FormAdd
  },
  {
    path: '/editProduct',
    name: 'editProduct',
    component: FormEdit
  },
  {
    path: '/deleteSales',
    name: 'deleteSales',
    component: DeleteSales
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
