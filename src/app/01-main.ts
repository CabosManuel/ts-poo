import axios from 'axios';
import { Product } from './models/product.model'

(async ()=> {

  function delay(time: number) {
    const promise: Promise<boolean> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  async function getProducts() {
    // Tipado genérico <Product[]>
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const products = await getProducts();
  // console.log("🚀 ~ products:", products);
  console.log(products.map(p => `${p.id} - ${p.title}`));

})();
