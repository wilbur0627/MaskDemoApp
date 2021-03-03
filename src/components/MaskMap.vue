<template>
  <div class="mask-map" id="mask-map"></div>
</template>
<script>
import L from "leaflet";
import { mapGetters } from "vuex";

export default {
  name: "MaskMap",
  data() {
    return  {
      map: {}
    }
  },
  computed: {
    ...mapGetters(["getCurrDistrictInfo", "filteredStores"]),
    currDistrictInfo() {
      return this.getCurrDistrictInfo;
    },
    stores() {
      return this.filteredStores;
    }
  },
  watch: {
    currDistrictInfo(data) {
      this.map.panTo(new L.LatLng(data.latitude, data.longitude));
    },
    stores(data) {
      data.forEach((data) => this.addMarker(data));
    }
  },
  mounted() {
    this.map = L.map('mask-map', {
      center: [25.03, 121.55], 
      zoom: 15
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(this.map);
  },
  methods: {
    addMarker(data) {
      const ICON = {
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
      L.marker([data.longitude, data.latitude], ICON).addTo(this.map).bindPopup(`<h2 class="popup-name>${data.name}</h2>"`);
    }
  }
};
</script>
<style lang="scss">
.mask-map {
  background-color: #aaa;
  width: 75%;
  height: 100vh;
}

</style>