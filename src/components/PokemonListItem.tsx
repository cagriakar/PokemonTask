import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonListResponseResult } from '../types';
import utils from '../utils';
import TypeTag from './TypeTag';

type Props = {
  item: PokemonListResponseResult;
  isDisabled?: boolean;
};

function LoadingItem() {
  return (
    <View style={styles.pokemonItem}>
      <View style={{ width: 55, height: 55, alignItems: 'center', flexDirection: 'row', flex: 1 }}>
        <View style={styles.pokemonImageContainer}>
          <LottieView
            source={require('../assets/pokeball-spinning.json')}
            autoPlay
            loop
            style={{ width: 45, height: 45 }}
          />
        </View>

        <Text style={styles.pokemonName}>Loading Pokemon...</Text>
      </View>
    </View>
  );
}

export default function PokemonListItem({ item, isDisabled = false }: Props) {
  const { name, url } = item;
  const navigation = useNavigation();
  const { data: pokemonDetail, isLoading, isError } = usePokemonDetail(url);

  if (isLoading) return <LoadingItem />;
  if (isError || !pokemonDetail) return null;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', { url })} disabled={isDisabled}>
      <View style={styles.pokemonItem}>
        <View style={styles.pokemonImageContainer}>
          <View style={styles.pokemonImageBackground}>
            <Image source={{ uri: pokemonDetail.sprites.front_default }} style={styles.pokemonImage} />
          </View>
        </View>
        <View>
          <View style={styles.pokemonNameSection}>
            <Text style={styles.pokemonName}>{utils.firstLetterUpperCase(name)}</Text>
            <Text style={styles.pokemonId}>{utils.idWithHashTag(pokemonDetail.id.toString())}</Text>
          </View>
          <View style={styles.pokemonTypesContainer}>
            {pokemonDetail.types.map(({ type }) => (
              <TypeTag key={type.name} type={type.name} />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3760AA',
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 8
  },
  pokemonImageContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  pokemonImageBackground: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff'
  },
  pokemonImage: {
    width: 50,
    height: 50
  },
  pokemonNameSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  pokemonId: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color: 'grey'
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    marginTop: 5
  }
});
