<template>
  <div class="flex flex-wrap">
    <div v-for="color in colors" v-bind:key="color"
         class="filter-item"
         :class="{'selected-item': selectedColor === color.color}"
         @click="selectColor(color.color)"
    >
      <img :src="getColorImage(color)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";
import {computed} from "vue";
import {Color} from "@/db/socks";

const colors = [ { img: "all", color: Color.ALL}, { img: "black", color: Color.BLACK },
  { img: "red", color: Color.RED }, { img: "green", color: Color.GREEN }, { img: "pink", color: Color.PINK } ];

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
  width: 37px;
  height: 37px;
  margin: 2px;
  border: 1px solid grey;
  text-align: center;
  cursor: pointer;
}

</style>
