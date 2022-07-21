import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import FormAdd from '../views/FormAdd.vue'
import FormEdit from '../views/FormEdit.vue'
import DeleteProduct from '../views/DeleteProduct.vue'


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
    path: '/addProduct',
    name: 'addProduct',
    component: FormAdd
  },
  {
    path: '/editProduct',
    name: 'editProduct',
    component: FormEdit
  },
  {
    path: '/deleteProduct',
    name: 'deleteProduct',
    component: DeleteProduct
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
