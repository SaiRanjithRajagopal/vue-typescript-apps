import { defineStore } from 'pinia'

import { Products } from '@/Model.d/Model'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [] as Products[],
    count:0,
  }),
  getters: {
    itemsCount() : number {
      return this.count;
    }
  },
  actions: {
    getAllProducts() : Products[] {
        return this.products;
      },
      saveProducts(receivedProducts: Products[]) : void {
        this.$patch({
          products: {...receivedProducts},
          count : receivedProducts.length});
      //   console.log(tempData.length + 'tempData')
      //   this.$patch({products: {...tempData},count : receivedProducts.length})
        //console.log( this.products[0].price )
      },
  }
})