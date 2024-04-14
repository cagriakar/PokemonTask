import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonListResponseResult } from '../types';

type Props = {
  item: PokemonListResponseResult;
};

function LoadingItem() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Text style={{ marginLeft: 10 }}>loading</Text>
    </View>
  );
}

function ErrorItem() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Text style={{ marginLeft: 10 }}>error</Text>
    </View>
  );
}

export default function PokemonListItem({ item }: Props) {
  const { name, url } = item;
  const navigation = useNavigation();
  const { data: pokemonDetail, isLoading, isError } = usePokemonDetail(url);

  if (isLoading) return <LoadingItem />;
  if (isError || !pokemonDetail) return <ErrorItem />;

  console.log(`PokemonListItem , pokemonDetail:`, pokemonDetail);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Image source={{ uri: pokemonDetail.sprites.front_default }} style={{ width: 50, height: 50 }} />
      <Text style={{ marginLeft: 10 }}>{name}</Text>
      {/* Navigate to Pokemon detail screen on press */}
      <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', { url })}>
        <Text style={{ marginLeft: 10 }}>View</Text>
        {/* <Icon name='chevron-right' size={20} color='#ccc' /> */}
      </TouchableOpacity>
    </View>
  );
}
