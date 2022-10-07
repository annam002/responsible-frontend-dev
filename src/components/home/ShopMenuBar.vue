<template>
<div class="flex justify-start">
  <div v-for="menuItem in menuItems" v-bind:key="menuItem.category"
       class="menu-item"
       :class="{'selected-item' : selectedCategory === menuItem.category}"
  @click="selectCategory(menuItem.category)">
    {{ menuItem.text }}
  </div>
</div>
</template>

<script setup lang="ts">
import {Category} from "@/db/socks";
import {useSockShopStore} from "@/stores/sockShop";
import {computed} from "vue";

const menuItems = [
  { text: "Frauen", category: Category.FEMALE }, { text: "Männer", category: Category.MALE },
  { text: "Kinder", category: Category.CHILD }
];

const store = useSockShopStore();

const selectedCategory = computed(() => { return store.sockFilter.category });

function selectCategory(category: Category) {
  store.selectCategory(category);
}
</script>

<style scoped>
.menu-item {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.selected-item {
  border: 1px solid lightgrey;
  border-bottom: none;
  background-color: lightgrey;
}
</style>
