import { Stack } from 'expo-router';
import '../assets/global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Productos' }} />
      <Stack.Screen name="producto/[id]" options={{ title: 'Detalle del producto' }} />
    </Stack>
  );
};

export default RootLayout;
