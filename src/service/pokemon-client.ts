import pokemonApi from '../api';
import endpoints from '../constants/endpoint';
import { Pokemon, PokemonListResponseResult } from '../types';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResponseResult[];
};

async function getPokemonList() {
  /* a conscious delay of 2 seconds to show the loading component */
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await pokemonApi.get<PokemonListResponse>(endpoints.listPokemon);
  return res.data.results;
}

async function getPokemonDetail(url: string) {
  const res = await pokemonApi.get<Pokemon>(url);
  return res.data;
}

export default {
  getPokemonList,
  getPokemonDetail
};
