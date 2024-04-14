import { useDeferredValue, useState } from 'react';
import usePokemonList from './usePokemonList';

export default function usePokemonSearch() {
  const { data } = usePokemonList();

  const [searchTerm, setSearchTerm] = useState('');
  const isSearchActive = useDeferredValue(!!searchTerm);

  const filteredPokemons = (data ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return { filteredPokemons, isSearchActive, searchTerm, handleSearch };
}
