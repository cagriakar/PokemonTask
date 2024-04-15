import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function LoadingPokeball() {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/not-found.json')} autoPlay loop style={styles.animation} />
      <Text style={styles.text}>Nothing found!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  animation: {
    width: 300,
    height: 300
  },
  text: {
    marginTop: -50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});
