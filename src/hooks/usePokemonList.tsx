import { useQuery } from '@tanstack/react-query';
import queryKey from '../constants/queryKey';
import pokemonClient from '../service/pokemon-client';

export default function usePokemonList() {
  return useQuery({
    queryKey: [queryKey.pokemonList],
    queryFn: pokemonClient.getPokemonList,
    /* the data fetched by the query will be considered fresh and not in need of refetching. */
    staleTime: Infinity
  });
}
