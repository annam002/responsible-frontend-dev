<template>
<div class="header">
  <h1 class="heading clicky" @click="openHome">The Sock-Shop</h1>
  <button class="img-button" @click="openCart"><img src="./../assets/cart.png"/><span class="num-items">{{ numItems }}</span></button>
</div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";

const store = useSockShopStore();
import {computed} from "vue";
import router from "@/router";

const numItems = computed(() => {
  return store.numItemsInCart;
});

function openHome() {
  router.push("/");
}
function openCart() {
  router.push("/checkout");
}
</script>

<style scoped>
.header {
  display: flex;
  padding: 1rem;
  background-color: darkblue;
}
.heading {
  font-weight: bold;
  font-size: xx-large;
  flex-grow: 1;
  text-align: center;
  color: white;
}
.num-items {
  background-color: white;
  color: darkblue;
  border-radius: 10px;
  padding: 2px;
}
.clicky {
  cursor: pointer;
}

.img-button {
  background-color: darkblue;
  border: none;
}
</style>
