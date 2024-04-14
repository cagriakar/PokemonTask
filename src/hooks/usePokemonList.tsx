import { useQuery } from '@tanstack/react-query';
import queryKey from '../constants/queryKey';
import pokemonClient from '../service/pokemon-client';

export default function usePokemonSearch() {
  return useQuery({
    queryKey: [queryKey.pokemonList],
    queryFn: pokemonClient.getPokemonList,
    staleTime: Infinity
  });
}
