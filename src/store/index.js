import { createStore } from 'vuex'

export default createStore({
  state: {
    currCity: "台北市",
    currDistrict: "內湖區",
    location: [],
    stores: []
  },
  mutations: {
    SET_CURRCITY(state, payload) {
      state.currCity = payload;
    },
    SET_CURRDISTRICT(state, payload) {
      state.currDistrict = payload;
    },
    SET_LOCATION(state, payload) {
      state.location = payload;
    },
    SET_STORES(state, payload) {
      state.stores = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
