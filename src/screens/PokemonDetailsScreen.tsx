import { Image, StyleSheet, Text, View } from 'react-native';
import Empty from '../components/Empty';
import LoadingPokeball from '../components/LoadingPokeball';
import usePokemonDetail from '../hooks/usePokemonDetail';

type Props = {
  route: {
    params: {
      url: string;
    };
  };
};
export default function PokemonDetailsScreen({ route }: Props) {
  const { url } = route.params;
  const { isLoading, isError, data: pokemon } = usePokemonDetail(url);

  if (isLoading) return <LoadingPokeball />;
  if (isError || !pokemon) return <Empty />;

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <View style={styles.pokemonImageContainer}>
          <View style={styles.pokemonImageBackground}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              // style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 20 }}
              style={styles.pokemonImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.pokemonName}>Name: {pokemon.name}</Text>
        <Text style={styles.pokemonDetail}>Height: {pokemon.height}</Text>
        <Text style={styles.pokemonDetail}>Weight: {pokemon.weight}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  imageSection: {
    backgroundColor: '#fff'
  },
  pokemonImageContainer: {
    width: 155,
    height: 155,
    borderRadius: 90,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10
  },
  pokemonImageBackground: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#fff'
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginVertical: 10
  },
  detailSection: {
    flex: 1,
    padding: 10
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  pokemonDetail: {
    fontSize: 14,
    marginBottom: 5
  }
});
