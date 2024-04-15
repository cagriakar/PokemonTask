import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function LoadingPokeball() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Pokemon...</Text>
      <LottieView source={require('../assets/pokeball-spinning.json')} autoPlay loop style={styles.animation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 150,
    height: 150
  },
  text: {
    marginTop: -50,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});
