import { fetchPharmacies } from '@/api/pharmacies';

const pharmacies = {
    namespaced: true,
    state: {
        stores: []
    },
    mutations: {
        SET_STORES(state, payload) {
            state.stores = payload;
        }
    },
    actions: {
        async fetchPharmacies({ commit }) {
            const data = await fetchPharmacies().then((res) => res.data);
            const features = data.features.map((d) => ({
                ...d.properties,
                latitude: d.geometry.coordinates[0],
                longitude: d.geometry.coordinates[1]
            }));
            commit('SET_STORES', features);
        }
    }
}
export default pharmacies;