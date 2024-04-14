import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import pokemonClient from '../service/pokemon-client';
import { PokemonListResponseResult } from '../types';

export default function HomeScreen() {
  const [pokemonList, setPokemonList] = useState<PokemonListResponseResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    pokemonClient
      .getPokemonList()
      .then((data) => setPokemonList(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ padding: 10, backgroundColor: '#f0f0f0', margin: 10 }}
        placeholder='Search Pokemon...'
        onChangeText={handleSearch}
        value={searchTerm}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList<PokemonListResponseResult>
          data={filteredPokemons}
          renderItem={({ item }) => <PokemonCard item={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
}
