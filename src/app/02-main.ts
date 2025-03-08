import { ProductMemoryService } from "./service/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Description 1',
  categoryId: 1,
  slug: 'product-1',
  images: ['image1.jpg'],
  creationAt: new Date(),
  updatedAt: new Date(),
});

const products = productService.getAll();
const firstProduct = products[0];

productService.updated(firstProduct.id, {
  title: 'Product 1 Updated',
});

const rta = productService.findOne(firstProduct.id);
console.log(rta);
