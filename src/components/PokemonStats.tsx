import { StyleSheet, Text, View } from 'react-native';
import { Pokemon } from '../types';

type Props = {
  stats: Pokemon['stats'];
};

const MAX_POKEMON_STAT = 255;
export default function PokemonStats({ stats }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Stats: </Text>
      {stats.map((stat) => (
        <View key={stat.stat.name} style={styles.statItem}>
          <Text style={styles.statName}>{stat.stat.name.toUpperCase()}:</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBarFill, { width: `${(stat.base_stat / MAX_POKEMON_STAT) * 100}%` }]}></View>
          </View>
          <Text style={styles.statValue}>{stat.base_stat}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3760AA',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  statName: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 160
  },
  statBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginLeft: 10
  },
  statBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'right',
    width: 30
  }
});
