<script>
import Sidebar from '../components/Sidebar.vue'
import { mapActions } from 'pinia'
import { useMainStore } from '../stores'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      name: "",
      price: 0,
      quantity: 0
    }
  },
  methods: {
    ...mapActions(useMainStore, ['addSales']),
    // add() {
    //   this.addProduct(this.data)
    // }
  },
}
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="bg-white text-center px-2 my-5 ml-5 rounded-lg">
      <div class="flex justify-center">
        <div class="bg-white w-full p-8 shadow-lg">
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/2 lg:w-1/4"></span>
            <p class="text-lg text-slate-600 font-semibold">Add Sales</p>
            <span class="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-medium mb-2">Name</label>
            </div>
            <select v-model="name" class="select select-bordered w-full max-w-xs">
              <option disabled selected>Choose..</option>
              <option value="nike">nike</option>
              <option value="adidas">adidas</option>
              <option value="puma">puma</option>
            </select>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-medium mb-2">Price</label>
            </div>
            <input v-model="price"
              class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
              type="number">
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-medium mb-2">quantity</label>
            </div>
            <input v-model="quantity"
              class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
              type="number">
          </div>
          <div class="mt-8">
            <button @click.prevent="addSales(name, price, quantity)"
              class="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-800"
              type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>