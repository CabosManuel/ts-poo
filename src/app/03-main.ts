import { ProductHttpService } from './service/product-http.service';

(async ()=> {
  try {
    const productService = new ProductHttpService();

    const products = await productService.getAll();
    console.log("🚀 ~ products:", products.length);
    console.log(products.map(product => product.price));

    const productId = products[0].id;
    const data = await productService.update(productId,
      {
        title: 'New title0',
        price: 10_000,
        description: 'New description2',
        categoryId: 1,
        images: ['https://placeimg.com'],
      }
    );

    console.log("🚀 ~ data:", data);

  } catch (error) {
    console.error(error);
  }
})();
