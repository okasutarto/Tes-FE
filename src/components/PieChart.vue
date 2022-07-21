
<script>
import Chart from 'chart.js/auto'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'

export default {
  computed: {
    ...mapState(useMainStore, ['totalSales3Month'])
  },
  mounted() {
    new Chart(document.getElementById("testPie"), {
      type: 'pie',
      data: {
        labels: ['Nike', 'Adidas', 'Puma'],
        datasets: [
          {
            backgroundColor: [
              "#1C3FAA", "#F05252", "#6b7280",
            ],
            data: this.totalSales3Month
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Ranking'
        }
      }
    });
  }
}

</script>

<template>
  <div class="flex">
    <canvas id="testPie" width="300" height="300"></canvas>
  </div>
</template>

