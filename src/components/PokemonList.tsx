import { FlatList, StyleSheet, View } from 'react-native';
import { PokemonListResponseResult } from '../types';
import Empty from './Empty';
import PokemonListItem from './PokemonListItem';

type Props = {
  data: PokemonListResponseResult[];
  isSearching?: boolean;
};
export default function PokemonList({ data, isSearching = false }: Props) {
  return (
    <View style={{ ...styles.container, opacity: isSearching ? 0.3 : 1 }}>
      <FlatList<PokemonListResponseResult>
        data={data}
        renderItem={({ item }) => <PokemonListItem item={item} />}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 7
  }
});
