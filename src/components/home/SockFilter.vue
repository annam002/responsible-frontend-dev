<template>
<div class="filter-box">
  <div class="filter-heading">Filter</div>
  <div class="filter-category">Größe</div>
  <div class="filter-selector"><size-selector></size-selector></div>
  <div class="filter-category">Farbe</div>
  <div class="filter-selector"><color-selector></color-selector></div>
  <div class="filter-category">Preis (maximal)</div>
  <div class="filter-selector"><price-selector></price-selector></div>
</div>
</template>

<script setup lang="ts">
import SizeSelector from "@/components/home/SizeSelector.vue";
import ColorSelector from "@/components/home/ColorSelector.vue";
import PriceSelector from "@/components/home/PriceSelector.vue";
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
</style>
