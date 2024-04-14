import pokemonApi from '../api';
import endpoints from '../constants/endpoint';
import { PokemonListResponseResult } from '../types';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResponseResult[];
};

async function getPokemonList() {
  const res = await pokemonApi.get<PokemonListResponse>(endpoints.listPokemon);
  return res.data.results;
}

export default {
  getPokemonList
};