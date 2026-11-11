import { Producto } from '../interfaces/producto.interface';
import { ProductoResponse } from '../responses/producto.response';

export class ProductoMapper {
  static desdeApiAProducto = (producto: ProductoResponse): Producto => {
    return {
      id: producto.id,
      nombre: producto.title,
      precio: producto.price,
      descripcion: producto.description,
      categoria: producto.category,
      imagen: producto.image,
    };
  };
}
