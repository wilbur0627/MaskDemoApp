<template>
  <div id="app">
    <!-- aside-menu 左側欄 -->
    <AsideMenu @triggerMarkerPopup="openPopup" ref="menu" />
    <!-- 地圖區塊 -->
    <MaskMap ref="map" />
    <!-- 燈箱區塊 -->
    <Lightbox />
  </div>
</template>

<script>
import AsideMenu from "@/components/AsideMenu.vue";
import MaskMap from "@/components/MaskMap.vue";
import Lightbox from "@/components/Lightbox.vue";
import { fetchTest } from '@/api/pharmacies';

export default {
  name: "App",
  data() {
    return {
      data: []
    }
  },
  components: {
    AsideMenu,
    MaskMap,
    Lightbox
  },
  methods: {
    openPopup(id) {
      this.$refs.map.triggerPopup(id);
    }
  },
  async mounted() {
    await this.$store.dispatch('areaLocation/fetchLocations');
    await this.$store.dispatch('pharmacies/fetchPharmacies');
    await fetchTest().then((res) => {
      this.data = res.data.results;
    });
  }
};
</script>

<style lang="scss" src="@/styles/style.scss"></style>
