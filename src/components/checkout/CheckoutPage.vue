<template>
<div class="main">
  <div class="subheading">Cart</div>
  <div>Content: <span>{{ numItems }}</span></div>
</div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";

const store = useSockShopStore();
import {computed} from "vue";

const numItems = computed(() => {
  return store.numItemsInCart;
});
</script>

<style scoped>
.subheading {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
