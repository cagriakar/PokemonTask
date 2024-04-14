import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export default function LoadingList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        source={require('../assets/pokeball-spinning.json')}
        autoPlay
        loop
        style={{
          width: 200,
          height: 200
        }}
      />
    </View>
  );
}
