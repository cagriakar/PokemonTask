import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type Props = {
  text: string;
  styleContainer?: ViewStyle;
  styleText?: TextStyle;
};

export default function Tag({ text, styleContainer = {}, styleText = {} }: Props) {
  return (
    <View style={{ ...styles.pokemonType, ...styleContainer }}>
      <Text style={{ ...styles.typeText, ...styleText }}>{text.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonType: {
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ccc'
  },
  typeText: {
    fontWeight: 'bold',
    fontSize: 10
  }
});
