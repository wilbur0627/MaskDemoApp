import { createStore } from 'vuex';
import areaLocation from './modules/areaLocation';
import pharmacies from './modules/pharmacies';
import getters from './getters';

export default createStore({
  modules: {
    areaLocation,
    pharmacies
  },
  getters
})
