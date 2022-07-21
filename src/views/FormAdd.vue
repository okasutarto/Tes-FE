<script>
// import Dashboard from './Dashboard.vue'

// export default {
//   components: {
//     Dashboard
//   },
// }
</script>

<template>
  <!-- <Dashboard /> -->
  <div class="flex justify-center">
    <div class="bg-white w-full p-8 shadow-lg">
      <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-1/2 lg:w-1/4"></span>
        <a href="#" class="text-xl font-semibold text-center text-gray-600 uppercase">Add Product</a>
        <span class="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <div class="mt-4">
        <label class="block text-gray-700 text-sm font-medium mb-2">Name</label>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="email">
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block text-gray-700 text-sm font-medium mb-2">Category</label>
        </div>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="text">
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block text-gray-700 text-sm font-medium mb-2">Price</label>
        </div>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="text">
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block text-gray-700 text-sm font-medium mb-2">Quantity</label>
        </div>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="text">
      </div>
      <div class="mt-8">
        <button class="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-800">Submit</button>
      </div>
    </div>
  </div>
</template>