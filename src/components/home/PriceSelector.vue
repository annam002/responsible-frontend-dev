<template>
<div>
  <input type="number" v-model="price" @input="updatePrice">
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useSockShopStore} from "@/stores/sockShop";

const store = useSockShopStore();

const price = ref(store.sockFilter.maxPrice);

function updatePrice() {
  store.sockFilter.maxPrice = price.value;
}
</script>

<style scoped>

</style>
