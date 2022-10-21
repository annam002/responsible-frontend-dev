<template>
<div class="flex flex-wrap">
  <button v-for="size in sizes" v-bind:key="size"
       class="filter-item"
       :class="{'selected-item': selectedSize === size}"
       @click="selectSize(size)"
          :aria-label="'Select size ' + size"
  >
    {{ size }}
    </button>
</div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";
import {computed} from "vue";

const sizes = [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45 ];

const store = useSockShopStore();

const selectedSize = computed(() => { return store.sockFilter.size });

function selectSize(size: number) {
  store.sockFilter.size = size;
}
</script>

<style scoped>
.filter-item {
  width: 40px;
  height: 42px;
  padding: 0.5rem;
  margin: 1px;
  border: 1px solid grey;
  text-align: center;
  cursor: pointer;
  color: #595959;
  background-color: white;
  font-size: 0.938rem;
}

.selected-item {
  background-color: #595959;;
  color: white;
}

.selected-item:hover, .selected-item:focus {
  background-color: #017e7e;
  color: white;
  border: 1px solid #017e7e;
}
</style>
