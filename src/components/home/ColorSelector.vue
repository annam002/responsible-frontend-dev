<template>
  <div class="flex flex-wrap">
    <button v-for="color in colors" v-bind:key="color" :aria-label="'Select color ' + color.alt"
         class="filter-item"
         @click="selectColor(color.color)"
    >
      <img :src="getColorImage(color)" alt/>
    </button>
  </div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";
import {computed} from "vue";
import {Color} from "@/db/socks";

const colors = [
  { img: "all", color: Color.ALL, alt: "All colours" },
  { img: "black", color: Color.BLACK, alt: "Black" },
  { img: "red", color: Color.RED, alt: "Red" },
  { img: "green", color: Color.GREEN, alt: "Green" },
  { img: "pink", color: Color.PINK, alt: "Pink" } ];

const store = useSockShopStore();

const selectedColor = computed(() => { return store.sockFilter.color });

function selectColor(color: Color) {
  store.sockFilter.color = color;
}

function getColorImage({img, color} : { img: string, color: Color }) {
  return "./src/assets/colors/"
       + img
      + (selectedColor.value === color ? "_selected" : "")
      + ".png";
}
</script>

<style scoped>
.filter-item {
  width: 41px;
  height: 41px;
  margin: 2px;
  border: 1px solid grey;
  text-align: center;
  cursor: pointer;
  padding: 2px;
}

.filter-item:hover, .filter-item:focus {
  background-color: #017e7e;
  color: white;
  padding: 1px;
  border: 1px solid #017e7e;
}

</style>
