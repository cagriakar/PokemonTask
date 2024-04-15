import React from 'react';
import Empty from '../components/Empty';
import LoadingPokeball from '../components/LoadingPokeball';
import PokemonList from '../components/PokemonList';
import usePokemonList from '../hooks/usePokemonList';

export default function PokemonListContainer() {
  const { data, isLoading, isError } = usePokemonList();

  if (isLoading) return <LoadingPokeball />;

  if (isError || !data) return <Empty />;

  return <PokemonList data={data} paginatedList />;
}
