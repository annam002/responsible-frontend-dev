import {defineStore} from 'pinia'
import type {Sock} from "@/db/socks";
import {Category, Color, getSocks} from "@/db/socks";

export const useSockShopStore = defineStore({
  id: 'sockShopStore',
  state: () => ({
    sockFilter: { category: Category.FEMALE, size: 37, color: Color.ALL, maxPrice: 25 },
    socksInCart: [] as Sock[]
  }),
  getters: {
    currentSockList(state) {
      return getSocks(state.sockFilter);
    },
    numItemsInCart(state) {
      return state.socksInCart.length;
    }
  },
  actions: {
    addToCart(sock: Sock) {
      this.socksInCart.push(sock);
    },
    selectCategory(category: Category) {
      this.sockFilter.category = category;
      this.sockFilter.size = (category === Category.FEMALE ? 37 : category === Category.MALE ? 42 : 32);
      this.sockFilter.color = Color.ALL;
      this.sockFilter.maxPrice = 25;
    }
  }
})
