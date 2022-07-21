import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'
export const useMainStore = defineStore('main', {

  state() {
    return {
      totalSales3Month: [], // total kuantitas penjualan semua produk 3 bulan terakhir
      nikeSales: [], // kuantitas  penjualan produk Nike 3 bulan terakhir
      adidasSales: [], // total kuantitas penjualan produk adidas 3 bulan terakhir
      pumaSales: [], // total kuantitas penjualan produk puma 3 bulan terakhir
      totalSales: [], // total kuantitas terjual * harga produk
      sales: []
    }
  },
  actions: {
    async login() {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email,
          password
        })
        console.log(response);
      } catch (error) {
        console.log(err);
      }
    },

    async getSales3Month() {
      try {
        const response = await axios.get(`${baseUrl}/salesLastThreeMonth`)
        console.log(response.data, '<<< sales');
        this.totalSales3Month = response.data.map(s => {
          return s.quantity
        })
        this.merch = response.data.map(s => {
          return s.name
        })
        this.totalSales = response.data
        console.log(this.totalSales, '<<<< 3');
      } catch (error) {
        console.log(err);
      }
    },

    async getSalesPerMonth() {
      try {
        const response = await axios.get(`${baseUrl}/salesPerMonth`)
        // console.log(response.data, '<<< month');
        this.nikeSales = response.data[0].quantity
        this.adidasSales = response.data[1].quantity
        this.pumaSales = response.data[2].quantity
      } catch (err) {
        console.log();
      }
    },

    async addSales(name, price, quantity) {
      try {
        console.log(name, price, quantity, '<<<<');
        const response = await axios.post(`${baseUrl}/sales`, {
          name,
          price,
          quantity
        })
        console.log(response, '<<<<<');
      } catch (err) {
        console.log(err);
      }
    },

    async getSales() {
      try {
        const response = await axios.get(`${baseUrl}/sales`)
        console.log(response.data, '<<< sales');
        this.sales = response.data
      } catch (error) {
        console.log(err);
      }
    }
  },
  getters: {

  },
})
