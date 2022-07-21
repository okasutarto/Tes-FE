<script>
import PieChart from '../components/PieChart.vue'
import Graph from '../components/Graph.vue'
import Sidebar from '../components/Sidebar.vue'
import Summary from '../components/Summary.vue'
import { mapActions } from 'pinia'
import { useMainStore } from '../stores'

export default {
  components: {
    PieChart,
    Graph,
    Sidebar,
    Summary
  },
  methods: {
    ...mapActions(useMainStore, ['getSales3Month', 'getSalesPerMonth']),
  },
  created() {
    this.getSales3Month()
    this.getSalesPerMonth()
  },
}
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex justify-center mr-5 w-full">
      <div class="bg-white text-center px-2 my-5 ml-5 rounded-lg w-full">
        <PieChart /> <br>
        <Graph />
        <Summary />
      </div>
    </div>
  </div>
</template>
