import { Image, Text, View } from 'react-native';
import usePokemonDetail from '../hooks/usePokemonDetail';

export default function PokemonDetailsScreen({ route }) {
  const { url } = route.params;
  const { isLoading, isError, data: pokemon } = usePokemonDetail(url);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError || !pokemon) return <Text>Error</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 20 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{pokemon.name}</Text>
      <View style={{ marginVertical: 20 }}>
        {pokemon.stats.map((stat) => (
          <View
            key={stat.stat.name}
            style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}
          >
            <Text style={{ fontWeight: 'bold' }}>{stat.stat.name}:</Text>
            <Text>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  // ... your detail screen logic with data
}
