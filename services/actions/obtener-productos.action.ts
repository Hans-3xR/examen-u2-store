import { ProductoMapper } from '@/infrastructure/mappers/producto.mapper';
import { ProductoResponse } from '@/infrastructure/responses/producto.response';
import { tiendaApi } from '../api/tienda-api';

export const obtenerProductosAction = async () => {
  try {
    const { data } = await tiendaApi.get<ProductoResponse[]>('/products');
    return data.map(ProductoMapper.desdeApiAProducto);
  } catch (error) {
    console.log(error);
    throw 'No se pudieron cargar los productos.';
  }
};
