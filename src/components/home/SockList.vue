<template>
<div v-if="currentSockList.length > 0" class="socklist-box">
  <div v-for="sock in currentSockList" v-bind:key="sock.id" class="sock-info">
    <div class="small-gap"><img class="sock-img" :src="'./src/assets/socks/' + sock.imageId + '.png'" width="100" height="100"/></div>
    <div class="flex-column whole-width">
      <div class="sock-name">{{ sock.name }}</div>
      <div>{{ sock.description }}</div>
      <div>{{ sock.price }}€</div>
      <button class="button" @click="() => addToCart(sock)">Add to Cart</button>
    </div>
  </div>
  <dialog ref="confirmDialog" class="info-box" :class="{ hidden: addedInfoHidden }">
    <div>The socks were added to the cart!</div>
    <br/>
    <button ref="okButton" class="button" @click="hideInfo" @keydown.esc.stop="hideInfo">OK</button>
  </dialog>
</div>
</template>

<script setup lang="ts">
import {useSockShopStore} from "@/stores/sockShop";
import {computed, nextTick, ref} from "vue";
import type {Sock} from "@/db/socks";

const store = useSockShopStore();

const confirmDialog = ref();
const okButton = ref();

const addedInfoHidden = ref(true);

const currentSockList = computed(() => {
  return store.currentSockList;
});

async function addToCart(sock: Sock) {
  store.addToCart(sock);
  confirmDialog.value.showModal();
  addedInfoHidden.value = false;

  await nextTick();
  okButton.value.focus();
}

function hideInfo() {
  confirmDialog.value.close();
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

</style>
