import { fetchPharmacies } from '@/api/pharmacies';

const pharmacies = {
    namespaced: true,
    state: {
        stores: [],
        showModal: false,
        currStore: undefined
    },
    mutations: {
        SET_STORES(state, payload) {
            state.stores = payload;
        },
        SET_SHOWMODAL(state, paylaod) {
            state.showModal = paylaod;
        },
        SET_CURRSTORE(state, payload) {
            state.currStore = payload;
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