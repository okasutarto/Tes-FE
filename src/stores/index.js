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
      sales: [],
      products: [],
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
        // console.log(response.data, '<<< sales');
        this.totalSales3Month = response.data.map(s => {
          return s.quantity
        })
        this.merch = response.data.map(s => {
          return s.name
        })
        this.totalSales = response.data
        // console.log(this.totalSales, '<<<< 3');
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
        // console.log(response, '<<<<<');
      } catch (err) {
        console.log(err);
      }
    },

    async getSales() {
      try {
        const response = await axios.get(`${baseUrl}/sales`)
        // console.log(response.data, '<<< sales');
        this.sales = response.data
      } catch (error) {
        console.log(err);
      }
    },

    async deleteSales(id) {
      try {
        const response = await axios.delete(`${baseUrl}/sales/${id}`)
        this.getSales()
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },

    async getProducts() {
      try {
        const response = await axios.get(`${baseUrl}/products`)
        console.log(response.data, '<<< products');
        this.products = response.data
      } catch (err) {
        console.log(err);
      }
    },

    async addProduct(name, price, stock) {
      try {
        const response = await axios.post(`${baseUrl}/products`, {
          name,
          price,
          stock
        })
        console.log(response.data, '<<<<< add');
        this.getProducts()
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        const response = await axios.delete(`${baseUrl}/products/${id}`)
        this.getProducts()
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {

  },
})
