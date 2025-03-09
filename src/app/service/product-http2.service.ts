import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

/* Clase que extiende de BaseHttpService para productos y permite
agregar otros métodos adicionales sin modificar la case Base */
export class ProductHttpService extends BaseHttpService<Product> {
  otherRequest () {
    const products = this.getAll();
    // logic
  }
}
