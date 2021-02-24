<template>
  <div id="app">
    <!-- aside-menu 左側欄 -->
    <AsideMenu />
    <!-- 地圖區塊 -->
    <MaskMap />
  </div>
</template>

<script>
import AsideMenu from "@/components/AsideMenu.vue";
import MaskMap from "@/components/MaskMap.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    AsideMenu,
    MaskMap
  },
  computed: {
    ...mapGetters(['getLocation', 'getStores'])
  },
  methods: {
  },
  async mounted() {
    await this.$store.dispatch('areaLocation/fetchLocations');
    await this.$store.dispatch('pharmacies/fetchPharmacies');
  }
};
</script>

<style lang="scss" src="@/styles/style.scss"></style>
