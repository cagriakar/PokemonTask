import { Text, View } from 'react-native';
import { PokemonListResponseResult } from '../types';

type Props = {
  item: PokemonListResponseResult;
};
export default function PokemonCard({ item }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      {/* <Image source={{ uri: item.sprites.front_default }} style={{ width: 50, height: 50 }} /> */}
      <Text style={{ marginLeft: 10 }}>{item.name}</Text>
    </View>
  );
}
