import Vuex from 'vuex'
import axios from 'axios'

const createBrandStore = () => {
  return new Vuex.Store({
    state: () => ({
      brandData: {},
      toggleSidebar: false
    }),
    mutations: {
      SET_BRAND_DATA(state, brandData) {
        state.brandData = brandData
      },
      TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
      }
    },
    actions: {
      async nuxtServerInit({ commit }) {
        // const domain = window.location.hostname
        const fakeDomain = 'www.ranty.pe'
        const data = await axios.get(process.env.apiUrl + '/?url=' + fakeDomain)
        commit('SET_BRAND_DATA', data.data)
      },
      toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
      }
    },
    getters: {
      getBrandData(state) {
        return state.brandData
      },
      toggleSidebar: (state) => state.toggleSidebar
    }
  })
}

export default createBrandStore
