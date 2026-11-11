import { Producto } from '@/infrastructure/interfaces/producto.interface';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text } from 'react-native';

const ProductoScreen = () => {
  const { producto } = useLocalSearchParams<{ producto: string }>();
  const item: Producto = JSON.parse(producto);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Image source={{ uri: item.imagen }} className="h-72 w-full" resizeMode="contain" />
      <Text className="mt-4 text-xl font-bold">{item.nombre}</Text>
      <Text className="mt-2 text-2xl text-green-700">$ {item.precio}</Text>
      <Text className="mt-2 text-gray-500">Categoría: {item.categoria}</Text>
      <Text className="mt-4 text-base">{item.descripcion}</Text>

      <Pressable className="mb-10 mt-6 rounded-lg bg-black p-3" onPress={() => router.back()}>
        <Text className="text-center font-bold text-white">Volver a la lista</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductoScreen;
