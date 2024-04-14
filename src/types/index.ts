// https://pokeapi.co/docs/v2#pokemon
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonPokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

type NamedAPIResource = {
  name: string;
  url: string;
};

type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: VersionDetail[];
};

type VersionDetail = {
  rarity: number;
  version: NamedAPIResource;
};

type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

type PokemonMoveVersion = {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
};
type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

type PokemonCries = {
  latest: string;
  legacy: string;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

type PokemonPokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonPokemonType[];
};

type PokemonPokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type PokemonListResponseResult = NamedAPIResource;
