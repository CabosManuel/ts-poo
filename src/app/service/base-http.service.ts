import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data;
// const service2 = new BaseHttpService<number>();
// service.data;

// const service3 = new BaseHttpService<number>();
// service3.getAll();
// const service4 = new BaseHttpService<Category>();
// service4.getAll();


(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url);
  const rta = await productService.getAll();
  console.log("🚀 ~ products:", rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log("🚀 ~ categories:", rta2.length);
})();
