<script>
// import { mapActions, mapWritableState } from 'pinia'
// import { useMainStore } from '../store'
import AddForm from '../views/FormAdd.vue'
import Delete from '../views/DeleteProduct.vue'
import Edit from '../views/FormEdit.vue'

export default {
  components: {
    AddForm,
    Delete,
    Edit
  },
}
</script>

<template>
  <div class="">
    <div class="flex">
      <div class="w-60 shadow-md bg-white px-2 my-5 ml-5 rounded-lg h-screen ">
        <ul class="relative">
          <li>
            <div class="w-36 text-center inline-flex items-center">
              <img
                src="https://media-exp1.licdn.com/dms/image/C510BAQGO67f6DVzRag/company-logo_200_200/0/1581326841035?e=2147483647&v=beta&t=xhHlyf_HgQUgdkT5kj5ecsyIDK1BVAnd8VDxHFYkSAU"
                alt="">
            </div>
          </li>
          <li>
            <div class="pt-2 relative mx-auto mr-5 text-gray-600">
              <input class="border-2 border-gray-300 bg-white h-10 px-4 ml-1 rounded-lg text-sm focus:outline-none"
                type="" placeholder="Search by brand">
              <button type="submit" class="absolute right-0 top-0 mt-5">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
                  style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </li>
          <li class="text-slate-500 font-semibold hover:bg-blue-500 h-10 hover:text-white mt-5 px-2">
            Dashboard
          </li>
          <li class="text-slate-500 font-semibold hover:bg-blue-500 h-10 hover:text-white px-2">
            Report
          </li>
          <li>
            <div class="collapse">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                <button
                  class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center"
                  type="button" data-dropdown-toggle="dropdown">Penjualan<svg class="w-4 h-4 ml-2" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg></button>
              </div>
              <div class=" collapse-content text-slate-500">
                <router-link to="/addProduct">
                  <p class="mb-5">Add</p>
                </router-link>
                <router-link to="/editProduct">
                  <p>Edit</p>
                </router-link>
                <router-link to="/deleteProduct">
                  <p>Delete</p>
                </router-link>
              </div>
            </div>
          </li>
          <li>
            <div class=" collapse">
              <input type="checkbox" />
              <div class="collapse-title text-md font-medium">
                <button
                  class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center"
                  type="button" data-dropdown-toggle="dropdown">Master Data<svg class="w-4 h-4 ml-2" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg></button>
              </div>
              <div class="collapse-content font text-slate-500">
                <p>User</p>
                <p>Product</p>
              </div>
            </div>
          </li>

        </ul>
        <!-- CARD -->
      </div>
      <div class="px-5 py-5 flex justify-center">
        <Edit />
      </div>
    </div>
  </div>
</template>

<style>
</style>