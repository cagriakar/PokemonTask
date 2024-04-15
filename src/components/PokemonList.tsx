import { FlashList } from '@shopify/flash-list';
import { StyleSheet, View } from 'react-native';
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
      <FlashList<PokemonListResponseResult>
        data={data}
        renderItem={({ item }) => <PokemonListItem item={item} isDisabled={isSearching} />}
        // keyExtractor={(item) => item.name}
        ListEmptyComponent={<Empty />}
        estimatedItemSize={1302}
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
