<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'
import Sidebar from '../components/Sidebar.vue'

export default {
  data() {
    return {
      name: "",
      price: 0,
      stock: 0
    }
  },
  methods: {
    ...mapActions(useMainStore, ['getProducts', 'addProduct', 'deleteProduct'])
  },
  computed: {
    ...mapState(useMainStore, ['products'])
  },
  components: {
    Sidebar
  },
  created() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex justify-center mr-5 w-full">
      <div class="bg-white text-center px-2 my-5 ml-5 rounded-lg w-full">
        <label for="my-modal-6"
          class="btn modal-button mt-5 flex justify-start w-16 bg-green-500 border-green-500 text-white">Add</label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <div class="flex justify-center">
              <div class="bg-white w-full p-8 shadow-lg">
                <div class="mt-4 flex items-center justify-between">
                  <span class="border-b w-1/2 lg:w-1/4"></span>
                  <p class="text-lg text-slate-600 font-semibold">Add Product</p>
                  <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div class="mt-4">
                  <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  </div>
                  <input v-model="name"
                    class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
                    type="text">
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
                    <label class="block text-gray-700 text-sm font-medium mb-2">stock</label>
                  </div>
                  <input v-model="stock"
                    class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
                    type="number">
                </div>
                <div class="mt-8">
                  <button @click.prevent="addProduct(name, price, stock)"
                    class="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-800"
                    type="submit">Submit</button>
                </div>
              </div>
            </div>
            <div class="modal-action">
              <label for="my-modal-6" class="btn bg-red-500 border-red-500 text-white">Close!</label>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold mb-2 mt-5">Product List</h1>
        </div>
        <div class="bg-white mb-5">
          <table class="table w-full bg-white">
            <!-- head -->
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
                <th>stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="item in products" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.stock }}</td>
                <td>
                  <button>
                    <div class="flex flex-row">
                      <button>
                        <span class="material-symbols-outlined text-yellow-400 mr-2">
                          edit
                        </span>
                      </button>
                      <button @click.prevent="deleteProduct(item.id)">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                            class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path
                              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </span>
                      </button>
                    </div>

                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>