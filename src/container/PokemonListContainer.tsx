import React from 'react';
import Error from '../components/Error';
import LoadingList from '../components/LoadingList';
import PokemonList from '../components/PokemonList';
import usePokemonList from '../hooks/usePokemonList';

export default function PokemonListContainer() {
  const { data, isLoading, isError } = usePokemonList();

  if (isLoading) return <LoadingList />;

  if (isError || !data) return <Error />;

  return <PokemonList data={data} />;
}
