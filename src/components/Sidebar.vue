<script>

</script>

<template>
  <div class="w-60 shadow-md bg-white px-2 my-5 ml-5 rounded-lg">
    <ul class="relative">
      <li>
        <div class="w-36 text-center flex justify-center ml-10">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQGO67f6DVzRag/company-logo_200_200/0/1581326841035?e=2147483647&v=beta&t=xhHlyf_HgQUgdkT5kj5ecsyIDK1BVAnd8VDxHFYkSAU"
            alt="">
        </div>
      </li>
      <li class="mt-5 px-4 mb-5">
        <router-link to="/"><button
            class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center w-48"
            type="button" data-dropdown-toggle="dropdown">
            <span class="material-symbols-outlined mr-2">
              home
            </span> Dashboard</button></router-link>
      </li>
      <li>
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-md font-medium ">
            <button
              class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center w-48 justify-between"
              type="button" data-dropdown-toggle="dropdown"><span class="material-symbols-outlined">
                sell
              </span>Penjualan<svg class="w-4 h-4 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg></button>
          </div>
          <div class=" collapse-content text-slate-500">
            <router-link to="/addProduct">
              <p class="mb-1">Add</p>
            </router-link>
            <router-link to="/editProduct">
              <p class="mb-1">Edit</p>
            </router-link>
            <router-link to="/deleteSales">
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
              class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center w-48 justify-between"
              type="button" data-dropdown-toggle="dropdown"><span class="material-symbols-outlined">
                account_tree
              </span>Master Data<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg></button>
          </div>
          <div class="collapse-content font text-slate-500">
            <p class="mb-1">User</p>
            <p>Product</p>
          </div>
        </div>
      </li>
      <li class="mt-5 px-4 mb-4">
        <router-link to="/"><button
            class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center w-48"
            type="button" data-dropdown-toggle="dropdown"><span class="material-symbols-outlined mr-2">
              summarize
            </span>Report</button></router-link>
      </li>
      <li class="mt-8 px-4 mb-5">
        <router-link to="/login"><button
            class="text-white bg-blue-500 hover:bg-blue-800 font-sm rounded-lg px-4 py-2.5 text-center inline-flex items-center w-48"
            type="button" data-dropdown-toggle="dropdown"><span class="material-symbols-outlined">
              logout
            </span>Logout</button></router-link>
      </li>
    </ul>
    <!-- CARD -->
  </div>
</template>

<style>
</style>