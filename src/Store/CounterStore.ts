import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    counter: -10,
    name: 'Eduardo',
  }),
  getters: {
    doubleCount() :number  {
      return this.counter * 2
    },
    doubleCountPlusOne() :number {
      return this.doubleCount * 2
    },
  },
  actions: {
    reset() {
      this.counter = 0
    },
    PiniaIncrementCounter() {
      console.log('PiniaIncrementCounter');
      this.counter++;
    },
  },
})