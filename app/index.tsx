import { Producto } from '@/infrastructure/interfaces/producto.interface';
import { obtenerProductosAction } from '@/services/actions/obtener-productos.action';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from 'react-native';

const ProductosScreen = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const resultado = await obtenerProductosAction();
        setProductos(resultado);
      } catch (error) {
        setError('No se pudieron cargar los productos.');
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  if (cargando) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="mt-3">Cargando productos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-center text-red-600">{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={productos}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => (
        <Pressable
          className="m-2 rounded-xl border border-gray-200 bg-white p-3"
          onPress={() =>
            router.push({
              pathname: '/producto/[id]',
              params: { id: item.id, producto: JSON.stringify(item) },
            })
          }
        >
          <Image source={{ uri: item.imagen }} className="h-40 w-full" resizeMode="contain" />
          <Text className="mt-2 font-bold">{item.nombre}</Text>
          <Text className="text-green-700">$ {item.precio}</Text>
        </Pressable>
      )}
    />
  );
};

export default ProductosScreen;
