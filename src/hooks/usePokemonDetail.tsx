import { useQuery } from '@tanstack/react-query';
import queryKey from '../constants/queryKey';
import pokemonClient from '../service/pokemon-client';

export default function usePokemonDetail(url: string) {
  return useQuery({
    queryKey: [queryKey.pokemonDetail, url],
    queryFn: () => pokemonClient.getPokemonDetail(url),
    staleTime: Infinity
  });
}
