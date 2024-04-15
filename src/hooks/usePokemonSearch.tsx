import { useDeferredValue, useState } from 'react';
import useDebounce from './useDebounce';
import usePokemonList from './usePokemonList';

export default function usePokemonSearch() {
  const { data } = usePokemonList();

  const [searchTerm, setSearchTerm] = useState('');
  const isSearchActive = useDeferredValue(!!searchTerm);
  const filterTerm = useDebounce(searchTerm, 300);
  const isPending = useDeferredValue(searchTerm !== filterTerm);

  const filteredPokemons = (data ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return { filteredPokemons, isSearchActive, isPending, searchTerm, handleSearch };
}
