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
      map: {},
      markers: []
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
      this.cleanMarkers();
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
      const marker = L.marker([data.longitude, data.latitude], ICON).addTo(this.map).bindPopup(`<h2 class="popup-name>${data.name}</h2>"`);
      marker.markerId = data.id;
      marker.lng = data.longitude;
      marker.lat = data.latitude;
      this.markers.push(marker);
    },
    cleanMarkers() {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });
      this.markers.length = 0;
    },
    triggerPopup(markerId) {
      const marker = this.markers.find((data) => data.markerId === markerId);
      console.log(marker);
      this.map.flyTo(new L.LatLng(marker.lng, marker.lat), 15);
      marker.openPopup();
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