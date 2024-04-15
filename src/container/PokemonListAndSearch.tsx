import { StyleSheet, TextInput, View } from 'react-native';
import PokemonList from '../components/PokemonList';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonListContainer from './PokemonListContainer';

export default function PokemonListAndSearch() {
  const { filteredPokemons, isSearchActive, isPending, handleSearch, searchTerm } = usePokemonSearch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder='Search Pokemon...'
        onChangeText={handleSearch}
        value={searchTerm}
      />
      {isSearchActive ? <PokemonList data={filteredPokemons} isSearching={isPending} /> : <PokemonListContainer />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
