const getters = {
    getCurrCity: state => state.areaLocation.currCity,
    getCityList: state => getters.getLocation(state).map((data) => data.name),
    getCurrDistrict: state => state.areaLocation.currDistrict,
    getDistrictList: state => getters.getLocation(state).find((data) => data.name === getters.getCurrCity(state))?.districts || [],
    getLocation: state => state.areaLocation.location,
    getStores: state => state.pharmacies.stores,
    filteredStores: state => {
        return getters.getStores(state).filter((data) => data.county === getters.getCurrCity(state) && data.town === getters.getCurrDistrict(state));
    },
}

export default getters;