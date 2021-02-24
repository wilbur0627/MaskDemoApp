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

export default {
  name: "App",
  components: {
    AsideMenu,
    MaskMap
  },
};
</script>

<style lang="scss" src="@/styles/style.scss"></style>
