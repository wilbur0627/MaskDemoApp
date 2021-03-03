const getters = {
    getCurrCity: state => state.areaLocation.currCity,
    getCityList: state => getters.getLocation(state).map((data) => data.name),
    getCurrDistrict: state => state.areaLocation.currDistrict,
    getDistrictList: state => getters.getLocation(state).find((data) => data.name === getters.getCurrCity(state))?.districts || [],
    getCurrDistrictInfo: state => getters.getDistrictList(state).find((data) => data.name === getters.getCurrDistrict(state)),
    getLocation: state => state.areaLocation.location,
    getStores: state => state.pharmacies.stores,
    filteredStores: state => {
        if (getters.isIgnore(state)) {
            if (getters.getKeywords(state)) {
                return getters.getStores(state)
                    .filter((data) => data.name.includes(getters.getKeywords(state)));
            } else {
                return [];
            }
        } else {
            if (getters.getKeywords(state)) {
                return getters.getStores(state)
                    .filter((data) => data.county === getters.getCurrCity(state) && data.town === getters.getCurrDistrict(state))
                    .filter((data) => data.name.includes(getters.getKeywords(state)));
            } else {
                return getters.getStores(state)
                .filter((data) => data.county === getters.getCurrCity(state) && data.town === getters.getCurrDistrict(state));
            }
        }
    },
    getKeywords: state => state.areaLocation.keywords,
    isIgnore: state => state.areaLocation.isIgnore,
    getShowModal: state => state.pharmacies.showModal,
    getCurrStore: state => state.pharmacies.currStore
}
export default getters;