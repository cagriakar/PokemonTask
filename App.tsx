import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PokemonDetailsScreen from './src/screens/PokemonDetailsScreen';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

function HeaderTitle() {
  return (
    <Image
      source={require('./src/assets/7.png')}
      style={{
        width: 250,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 15
      }}
    />
  );
}
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
              headerTitle: HeaderTitle
            }}
          />
          <Stack.Screen
            name='PokemonDetails'
            component={PokemonDetailsScreen}
            options={{
              headerTitle: HeaderTitle
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
