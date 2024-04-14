import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getPokemons();
  //     setPokemons(data);
  //   };
  //   fetchData();
  // }, []);

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (text: string) => {
    // setSearchTerm(text);
    console.log('text', text);
  };

  const renderItem = ({ item }) => <View>{item.name}</View>;

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ padding: 10, backgroundColor: '#f0f0f0', margin: 10 }}
        placeholder='Search Pokemon...'
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <FlatList data={filteredPokemons} renderItem={renderItem} keyExtractor={(item) => item.name} />
    </View>
  );
}
