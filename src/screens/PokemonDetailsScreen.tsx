import { Image, StyleSheet, Text, View } from 'react-native';
import Empty from '../components/Empty';
import LoadingPokeball from '../components/LoadingPokeball';
import PokemonStats from '../components/PokemonStats';
import Tag from '../components/Tag';
import TypeTag from '../components/TypeTag';
import usePokemonDetail from '../hooks/usePokemonDetail';
import utils from '../utils';

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
        <View style={styles.card}>
          <Text style={styles.pokemonName}>Name: {utils.firstLetterUpperCase(pokemon.name)}</Text>
          <Text style={styles.pokemonDetail}>Height: {utils.heightToMeter(pokemon.height)}</Text>
          <Text style={styles.pokemonDetail}>Weight: {utils.weightToKg(pokemon.weight)}</Text>
          <View style={styles.pokemonOtherInfoContainer}>
            <Text style={{ fontSize: 16 }}>Type: </Text>
            {pokemon.types.map(({ type }) => (
              <TypeTag key={type.name} type={type.name} />
            ))}
          </View>
          <View style={styles.pokemonOtherInfoContainer}>
            <Text style={{ fontSize: 16 }}>Abilities: </Text>
            {pokemon.abilities.map(({ ability }) => (
              <Tag key={ability.name} text={ability.name} />
            ))}
          </View>
        </View>
        <PokemonStats stats={pokemon.stats} />
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
    alignItems: 'center',
    paddingVertical: 20
  },
  pokemonImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  pokemonImageBackground: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#fff'
  },
  pokemonImage: {
    width: 120,
    height: 120
  },
  detailSection: {
    flex: 1,
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  pokemonDetail: {
    fontSize: 16,
    marginBottom: 10
  },
  pokemonOtherInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});
