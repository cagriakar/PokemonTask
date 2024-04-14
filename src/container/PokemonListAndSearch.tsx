import { TextInput } from 'react-native';
import PokemonList from '../components/PokemonList';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonListContainer from './PokemonListContainer';

export default function PokemonListAndSearch() {
  const { filteredPokemons, isSearchActive, handleSearch, searchTerm } = usePokemonSearch();

  return (
    <>
      <TextInput
        style={{ padding: 10, backgroundColor: '#f0f0f0', margin: 10 }}
        placeholder='Search Pokemon...'
        onChangeText={handleSearch}
        value={searchTerm}
      />
      {isSearchActive ? <PokemonList data={filteredPokemons} /> : <PokemonListContainer />}
    </>
  );
}
