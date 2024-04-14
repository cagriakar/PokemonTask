import { FlatList } from 'react-native';
import { PokemonListResponseResult } from '../types';
import PokemonListItem from './PokemonListItem';

type Props = {
  data: PokemonListResponseResult[];
};
export default function PokemonList({ data }: Props) {
  return (
    <FlatList<PokemonListResponseResult>
      data={data}
      renderItem={({ item }) => <PokemonListItem item={item} />}
      keyExtractor={(item) => item.name}
    />
  );
}
