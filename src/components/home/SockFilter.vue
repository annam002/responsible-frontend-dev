<template>
<div class="filter-box">
  <button v-if="socklistVisible" id="skipButton" class="button" @click="focusSockList">Skip Filter</button>
  <div class="filter-heading">Filter</div>
  <div class="filter-category">Size</div>
  <div class="filter-selector"><size-selector></size-selector></div>
  <div class="filter-category">Colour</div>
  <div class="filter-selector"><color-selector></color-selector></div>
  <div class="filter-category">Price (maximum)</div>
  <div class="filter-selector"><price-selector></price-selector></div>
</div>
</template>

<script setup lang="ts">
import SizeSelector from "@/components/home/SizeSelector.vue";
import ColorSelector from "@/components/home/ColorSelector.vue";
import PriceSelector from "@/components/home/PriceSelector.vue";
import {computed} from "vue";
import {useSockShopStore} from "@/stores/sockShop";

const store = useSockShopStore();

const socklistVisible = computed(() => { return store.currentSockList.length > 0 });

function focusSockList() {
  document.getElementById("sock0")?.focus();
}
</script>

<style scoped>
.filter-box {
  height: 100%;
  border: 1px solid lightgrey;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 239px;
}
.filter-heading {
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
}

.filter-category {
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-top: 1px solid lightgrey;
}

.filter-selector {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

#skipButton {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 100;
}

#skipButton:focus {
  left: 0;
  top: 0;
  width: auto;
  height: auto;
}
</style>
