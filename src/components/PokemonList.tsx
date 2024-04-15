import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PokemonListResponseResult } from '../types';
import Empty from './Empty';
import PokemonListItem from './PokemonListItem';
type Props = {
  data: PokemonListResponseResult[];
  paginatedList?: boolean;
  isSearching?: boolean;
};

const POKEMONS_PER_PAGE = 20;

// Pagination is a simulated approach due to the lack of a search endpoint on the PokeAPI.
// Slices the data based on the current page and POKEMONS_PER_PAGE to limit displayed items.
export default function PokemonList({ data, isSearching = false, paginatedList = false }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.round(data.length / POKEMONS_PER_PAGE);

  return (
    <View style={{ ...styles.container, opacity: isSearching ? 0.3 : 1 }}>
      <FlashList<PokemonListResponseResult>
        data={data.slice(0, currentPage * POKEMONS_PER_PAGE)}
        renderItem={({ item }) => <PokemonListItem item={item} isDisabled={isSearching} />}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<Empty />}
        estimatedItemSize={data.length}
        onEndReached={() => {
          paginatedList && setCurrentPage((prevPage) => (prevPage <= totalPages ? currentPage + 1 : prevPage));
        }}
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
