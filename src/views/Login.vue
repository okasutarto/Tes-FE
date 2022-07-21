<template>
  <div class="py-6 mt-20 flex justify-center">
    <div class="bg-white w-full p-8 lg:w-1/3 shadow-lg">
      <div class="w-36 text-center ml-20">
        <img class=""
          src="https://media-exp1.licdn.com/dms/image/C510BAQGO67f6DVzRag/company-logo_200_200/0/1581326841035?e=2147483647&v=beta&t=xhHlyf_HgQUgdkT5kj5ecsyIDK1BVAnd8VDxHFYkSAU"
          alt="">
      </div>
      <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-1/5 lg:w-1/4"></span>
        <a href="#" class="text-xl font-semibold text-center text-gray-600 uppercase">LOGIN</a>
        <span class="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <div class="mt-4">
        <label class="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="email">
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block text-gray-700 text-sm font-medium mb-2">Password</label>
        </div>
        <input
          class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
          type="password">
      </div>
      <div class="mt-8">
        <router-link to="/">
          <button class="bg-gray-700 text-white font-semibold py-2 px-4 w-full rounded hover:bg-gray-600">Sign
            In</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
</style>