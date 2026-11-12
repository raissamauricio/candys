import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
      <View style={{ width: '100%', maxWidth: 1200, flex: 1, backgroundColor: '#fff' }}>
        <Slot />
      </View>
    </View>
  );
}