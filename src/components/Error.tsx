import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export default function Error() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        source={require('../assets/not-found.json')}
        autoPlay
        loop
        style={{
          width: 300,
          height: 300
        }}
      />
    </View>
  );
}
