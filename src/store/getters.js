const getters = {
    getCurrCity: state => state.areaLocation.currCity,
    getCityList: state => state.areaLocation.location.map((data) => data.name),
    getCurrDistrict: state => state.areaLocation.currDistrict,
    getDistrictList: state => state.areaLocation.location.find((data) => data.name === state.areaLocation.currCity)?.districts || [],
    getLocation: state => state.areaLocation.location,
    getStores: state => state.pharmacies.stores,
}

export default getters;