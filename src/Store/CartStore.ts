import { defineStore } from 'pinia'

export type Item = { name: string; price: number }

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Item[]
  }),
  getters: {
    itemsCount() : number {
      return this.items.length
    }
  },
  actions: {
    addItem(item: Item) : void {
      this.items.push(item)
    },
    removeItem(item: Item) : void {
      const i = this.items.findIndex(s => s.name === item.name)
      if (i > -1) this.items.splice(i, 1)
    },
    getAllItem() : Item[] {
        return this.items;
      }
  }
})