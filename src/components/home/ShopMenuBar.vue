<template>
<div class="flex justify-start" role="tablist">
  <div role="tab" :id="'tab' + index"
       v-for="(tabItem, index) in tabItems"
       v-bind:key="tabItem.category"
       :ref="(el) => tabRefs['tab' + index] = el"
       class="tab-item"
       :class="{'selected-item' : selectedCategory === tabItem.category}"
       :tabindex="selectedCategory === tabItem.category ? 0 : -1"
       v-on:keyup.left="previousTab(index)"
       v-on:keyup.right="nextTab(index)"
       @click="selectCategory(tabItem.category)"
        @focus="selectCategory(tabItem.category)">
    {{ tabItem.text }}
  </div>
</div>
</template>

<script setup lang="ts">
import {Category} from "@/db/socks";
import {useSockShopStore} from "@/stores/sockShop";
import {computed} from "vue";

const tabItems = [
  { text: "Women", category: Category.FEMALE }, { text: "Men", category: Category.MALE },
  { text: "Kids", category: Category.CHILD }
];

const store = useSockShopStore();
const tabRefs = {};

const selectedCategory = computed(() => { return store.sockFilter.category });

function selectCategory(category: Category) {
  store.selectCategory(category);
}

function previousTab(index: number) {
  if (index === 0) {
    return true;
  }
  const previousTabIndex = index - 1;
  tabRefs["tab" + previousTabIndex].focus();
  return false;
}

function nextTab(index: number) {
  if (index === tabItems.length - 1) {
    return true;
  }
  const nextTabIndex = index + 1;
  tabRefs["tab" + nextTabIndex].focus();
  return false;
}
</script>

<style scoped>
.tab-item {
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
