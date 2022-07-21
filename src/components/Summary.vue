<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'

export default {
  computed: {
    ...mapState(useMainStore, ['totalSales'])
  },
  methods: {
    total(quantity, price) {
      return quantity * price
    },
  },
  name: "Summary"
}
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold mb-2">Summary</h1>
  </div>
  <div class="bg-white mb-5">
    <table class="table w-full bg-white">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Quantity</th>
          <th>Total Sales </th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(item, index) in totalSales" :key="item.index">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ this.total(item.quantity, item.price) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>