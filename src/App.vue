<template>
  <shop-header></shop-header>
  <RouterView />
  <shop-footer></shop-footer>
</template>

<script setup lang="ts">
import ShopHeader from "@/components/ShopHeader.vue";
import ShopFooter from "@/components/ShopFooter.vue";
</script>

<style scoped>

</style>
