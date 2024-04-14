import React from 'react';
import { View } from 'react-native';
import PokemonListAndSearch from '../container/PokemonListAndSearch';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <PokemonListAndSearch />
    </View>
  );
}
