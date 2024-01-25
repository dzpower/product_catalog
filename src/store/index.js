import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
        {
          id: 0,
          image: 'https://cdn-icons-png.flaticon.com/512/1312/1312091.png',
          name: 'Custom Product 0',
          price: 222,
          currency: '$',
          weight: 323,
          status: true
        },
      {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/1312/1312091.png',
        name: 'Custom Product 1',
        price: 11,
        currency: '$',
        weight: 2,
        status: false
      },
      {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/1312/1312091.png',
        name: 'Custom Product 2',
        price: 333,
        currency: '$',
        weight: 1,
        status: true
      },
    ],
    currentProduct: {},
    filters: {}
  },
  getters: {
    getProducts: (state) => {
      return state.products.filter(product => {
        return (!state.filters.name || product.name.includes(state.filters.name)) &&
            (!state.filters.minPrice || product.price >= Number(state.filters.minPrice)) &&
            (!state.filters.maxPrice || product.price <= Number(state.filters.maxPrice)) &&
            (!state.filters.weight || product.weight === Number(state.filters.weight))
      });
    },
    getCurrentProduct: (state) => state.currentProduct
  },
  mutations: {
    applyFilter(state, filters) {
      state.filters = filters
    },
    applyCurrentProduct(state, product) {
      state.currentProduct = product
    }
  },

  actions: {
    setFilter({ commit }, filters) {
      commit('applyFilter', filters)
    },
    setCurrentProduct({ commit }, product) {
      commit('applyCurrentProduct', product)
    }
  },
})
