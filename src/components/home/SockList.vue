<template>
<div v-if="currentSockList.length > 0" class="socklist-box">
  <div v-for="sock in currentSockList" v-bind:key="sock.id" class="sock-info">
    <div class="small-gap"><img class="sock-img" :src="'./src/assets/socks/' + sock.imageId + '.png'" width="100" height="100"/></div>
    <div class="flex-column whole-width">
      <div class="sock-name">{{ sock.name }}</div>
      <div>{{ sock.description }}</div>
      <div>{{ sock.price }}€</div>
      <div class="button add-to-cart" @click="() => addToCart(sock)">In den Warenkorb</div>
    </div>
  </div>
  <div :class="{ hidden: addedInfoHidden }" class="info-box">
    <div>The socks were added to the cart!</div>
    <br/>
    <div class="button" @click="hideInfo">OK</div>
  </div>
</div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";
import {computed, ref} from "vue";
import type {Sock} from "@/db/socks";

const store = useSockShopStore();

const addedInfoHidden = ref(true);

const currentSockList = computed(() => {
  return store.currentSockList;
});

function addToCart(sock: Sock) {
  store.addToCart(sock);
  addedInfoHidden.value = false;
}

function hideInfo() {
  addedInfoHidden.value = true;
}

</script>

<style scoped>
.socklist-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid lightgrey;
  border-left: none;
  overflow-y: hidden;
}
.sock-info {
  display: flex;
  padding: 0.5rem;
  border: 1px solid lightgrey;
  margin: 0.25rem;
  width: 100%;
}

.sock-img {
  border: 1px solid lightgrey;
}

.sock-name {
  font-size: 1rem;
}

.add-to-cart {
  width: 150px;
  align-self: flex-end;
}
</style>
