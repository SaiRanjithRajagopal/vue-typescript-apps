import { Products } from '@/Model.d/Model';
import { useProductStore } from "@/Store/ProductStore";
import { GetAllProducts } from '@/Api/ProductApi';

export class ProductModule {
    product: Products | null = null;
    productStore = useProductStore();

    async SaveData() : Promise<void> {
        //Fetch products
        const products  = await GetAllProducts();

        //Save the response in store
        this.productStore.saveProducts(products);
      }

      async GetData() : Promise<Products[]> {
        //Save the response in store
        return this.productStore.getAllProducts();
      }
  }
