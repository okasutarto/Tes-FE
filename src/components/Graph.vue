<script>
import Chart from "chart.js/auto";
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'

export default {
  computed: {
    ...mapState(useMainStore, ['nikeSales', 'adidasSales', 'pumaSales'])
  },
  mounted() {
    const labels = [
      'April',
      'May',
      'June',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'Nike',
        backgroundColor: '#1C3FAA',
        borderColor: '#1C3FAA',
        data: this.nikeSales,
      },
      {
        label: 'Adidas',
        backgroundColor: "#F05252",
        borderColor: "#F05252",
        data: this.adidasSales,
      },
      {
        label: 'Puma',
        backgroundColor: "#6b7280",
        borderColor: "#6b7280",
        data: this.pumaSales,
      }
      ]
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  }
}
</script>

<template>
  <div class="flex ml-52 mt-8" style="width: 600px; height: 400px;">
    <canvas id="myChart"></canvas>
  </div>
</template>