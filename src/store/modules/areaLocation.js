import { fetchLocations } from '@/api/areaLocations';

const areaLocation = {
    namespaced: true,
    state: {
        currCity: "臺北市",
        currDistrict: "內湖區",
        location: [],
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
    },
    actions: {
        async fetchLocations({ commit }) {
            const data = await fetchLocations().then((res) => res.data);
            commit('SET_LOCATION', data);
        },
        fetchCurrCity({ commit }, payload) {
            commit('SET_CURRCITY', payload);
        },
        fetchCurrDistrict({ commit }, payload) {
            commit('SET_CURRDISTRICT', payload);
        }
    }
}

export default areaLocation;