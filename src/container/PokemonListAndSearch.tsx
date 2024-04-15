import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PokemonList from '../components/PokemonList';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonListContainer from './PokemonListContainer';

export default function PokemonListAndSearch() {
  const { filteredPokemons, isSearchActive, isPending, handleSearch, searchTerm } = usePokemonSearch();

  const clearSearchTerm = () => {
    handleSearch(''); // Set search term to empty string to clear
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search Pokemon by name...'
          onChangeText={handleSearch}
          value={searchTerm}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={clearSearchTerm} style={styles.clearButton}>
            <Text style={styles.clearIconText}>&#10006;</Text>
          </TouchableOpacity>
        )}
      </View>
      {isSearchActive ? <PokemonList data={filteredPokemons} isSearching={isPending} /> : <PokemonListContainer />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  searchInputContainer: {
    paddingVertical: 10,
    position: 'relative'
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    marginTop: 21
  },
  clearIconText: {
    fontSize: 18,
    color: '#ccc'
  }
});
