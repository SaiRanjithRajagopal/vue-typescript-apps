<template>
  <p>Cart</p>
  <Button label="open" @click="getProductsHandler" />
  <p>productStore.count {{ productStore.count }}</p>
  <template v-for="(product, index) in productStore.products" :key="index">
    <p>{{ product.title }}</p>
  </template>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Products } from "@/Model.d/Model";
import { useProductStore } from "@/Store/ProductStore";
//import { GetAllProducts } from "@/Api/ProductApi";
import { ProductModule } from "@/Module/Product";

@Options({
  components: {},
  props: {},
})
export default class Product extends Vue {
  products?: Products[];
  productStore = useProductStore();

  async getProductsHandler(): Promise<void> {
    console.log("getProductsHandler");

    //Fetch products Way one
    //this.products = await GetAllProducts();

    //Fetch products Way two
    let productModule = new ProductModule();
    await productModule.SaveData();

    //Save the response in store
    //this.productStore = useProductStore();
    //this.productStore.saveProducts(this.products);

    // this.products = this.productStore.getAllProducts();
    // console.log(this.products[0].price);
    // console.log(this.productStore.count);
    // console.log(this.productStore.itemsCount);
  }
}
</script>
