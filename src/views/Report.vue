<script>
import Sidebar from '../components/Sidebar.vue'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'

export default {
  components: {
    Sidebar,
  },
  methods: {
    ...mapActions(useMainStore, ['getSales', 'deleteSales']),
    total(quantity, price) {
      return quantity * price
    },
    sumSales() {
      let total = 0
      for (let i = 0; i < this.sales.length; i++) {
        // console.log(this.sales[i].quantity, '<<<');
        total += (this.sales[i].quantity * this.sales[i].price)
      }
      return total;
    },
  },
  computed: {
    ...mapState(useMainStore, ['sales']),
  },
  created() {
    this.getSales()
    this.sumSales()
  },
}
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="bg-white text-center px-2 my-5 ml-5 rounded-lg">
      <div class="m-20 mx-20">
        <div class="bg-white">
          <table class="table w-full bg-white">
            <!-- head -->
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>quantity</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in sales" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ this.total(item.quantity, item.price) }}</td>
              </tr>
              <tr>
                <th>Total</th>
                <th></th>
                <th></th>
                <th>{{ this.sumSales() }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>