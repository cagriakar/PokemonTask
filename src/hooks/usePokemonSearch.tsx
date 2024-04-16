import { useDeferredValue, useState } from 'react';
import useDebounce from './useDebounce';
import usePokemonList from './usePokemonList';

/**
 * The `usePokemonSearch` function handles searching for Pokemon based on a search term input.
 * @returns an object with the following properties:
 * @property filteredPokemons - The list of Pokemon that match the search term.
 * @property isSearchModeActive - A boolean indicating whether the search-mode is currently active.
 * @property isPending - A boolean indicating whether the search term is still being debounced.
 * @property searchTerm - The current search term.
 * @property handleSearch - A function to update the search term. It accepts one parameter, which should be the new
 */

export default function usePokemonSearch() {
  const { data } = usePokemonList();

  const [searchTerm, setSearchTerm] = useState('');
  const isSearchModeActive = useDeferredValue(!!searchTerm);
  const filterTerm = useDebounce(searchTerm, 300);
  const isPending = useDeferredValue(searchTerm !== filterTerm);

  const filteredPokemons = (data ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return { filteredPokemons, isSearchModeActive, isPending, searchTerm, handleSearch };
}
