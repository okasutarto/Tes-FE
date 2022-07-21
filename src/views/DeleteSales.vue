<script>
import Sidebar from '../components/Sidebar.vue'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'

export default {
  components: {
    Sidebar,
  },
  methods: {
    ...mapActions(useMainStore, ['getSales']),
  },
  computed: {
    ...mapState(useMainStore, ['sales']),
  },
  created() {
    this.getSales()
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td class="p-2 whitespace-nowrap text-center">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill"
                      viewBox="0 0 16 16">
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>