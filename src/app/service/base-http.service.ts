import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
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
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Category 1',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log("🚀 ~ categories:", rta2.length);
})();
