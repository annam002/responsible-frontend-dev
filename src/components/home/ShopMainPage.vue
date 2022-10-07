<template>
<div class="main">
  <shop-menu-bar></shop-menu-bar>
  <div class="content">
    <sock-filter></sock-filter>
    <sock-list></sock-list>
  </div>
</div>
</template>

<script setup lang="ts">
import ShopMenuBar from "@/components/home/ShopMenuBar.vue";
import SockFilter from "@/components/home/SockFilter.vue";
import SockList from "@/components/home/SockList.vue";
</script>

<style scoped>

</style>
