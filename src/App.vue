<template>
  <div id="app">
    <!-- aside-menu 左側欄 -->
    <AsideMenu />
    <!-- 地圖區塊 -->
    <MaskMap />
    <!-- 燈箱區塊 -->
    <Lightbox />
  </div>
</template>

<script>
import AsideMenu from "@/components/AsideMenu.vue";
import MaskMap from "@/components/MaskMap.vue";
import Lightbox from "@/components/Lightbox.vue";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(['getLocation', 'getStores', 'getCityList', 'getDistrictList'])
  },
  methods: {
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
