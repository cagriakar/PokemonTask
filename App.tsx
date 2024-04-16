import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import PokemonDetailsScreen from './src/screens/PokemonDetailsScreen';

type RootStackParamList = {
  Home: undefined;
  PokemonDetails: { url: string };
};

const queryClient = new QueryClient();
const Stack = createStackNavigator<RootStackParamList>();

function HeaderTitle() {
  return (
    <Image
      source={require('./src/assets/7.png')}
      style={{
        width: 250,
        height: 40,
        resizeMode: 'contain'
      }}
    />
  );
}
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
              headerTitle: HeaderTitle,
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name='PokemonDetails'
            component={PokemonDetailsScreen}
            options={{
              headerBackTitleVisible: false,
              headerTitle: HeaderTitle
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export { type RootStackParamList };
