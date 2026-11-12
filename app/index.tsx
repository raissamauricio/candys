import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      
      {/* MENU ROSA (Esquerda) */}
      <View style={{ width: 300, backgroundColor: '#f8bbd0', padding: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#8e24aa', marginTop: 20 }}>
          🍬 CANDYS
        </Text>
        <Text style={{ fontSize: 14, color: '#8e24aa', marginBottom: 20 }}>
          Um docinho de felicidade!
        </Text>
        
        <View style={{ backgroundColor: '#fff', borderRadius: 20, padding: 15, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#8e24aa' }}>🛒 Carrinho (0)</Text>
        </View>
      </View>

      {/* CONTEÚDO (Direita) */}
      <ScrollView style={{ flex: 1, backgroundColor: '#fdf5f8' }} contentContainerStyle={{ padding: 30 }}>
        
        <View style={{ backgroundColor: '#ffeb99', borderRadius: 20, padding: 30, marginBottom: 30 }}>
          <Text style={{ fontSize: 14, color: '#8e24aa', fontWeight: 'bold', marginBottom: 10 }}>
            SEJA BEM-VINDO À CANDYS!
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#5d4037', marginBottom: 10 }}>
            A vida fica mais doce por aqui!
          </Text>
          <Text style={{ fontSize: 16, color: '#5d4037' }}>
            Encontre seus doces favoritos e deixe seu dia muito mais feliz.
          </Text>
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#8e24aa', marginBottom: 15 }}>
          Explore nossas categorias ❤️
        </Text>
        
        <View style={{ backgroundColor: '#c2185b', padding: 15, borderRadius: 30, marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Todos</Text>
        </View>
        
        <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 30, marginBottom: 10 }}>
          <Text style={{ color: '#c2185b', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Docinhos</Text>
        </View>

      </ScrollView>
    </View>
  );
}