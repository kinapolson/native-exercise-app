import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';

const exercises = [
  { id: '1', name: 'Push Ups', type: 'repetition' },
  { id: '2', name: 'Bicycling', type: 'duration' },
  { id: '3', name: 'Jumping Jacks', type: 'repetition' },
  { id: '4', name: 'Running', type: 'duration' },
  { id: '5', name: 'Sit Ups', type: 'repetition' },
];

const Home = ({ setSelection, setExerciseName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EXERCISES</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => {
              setExerciseName(item.name);
              setSelection(item.type);
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1511',
    padding: 20,
  },
  header: {
    fontSize: 32,
    color: '#BBE40D',
    fontFamily: 'Jersey 25',
    marginBottom: 50,
  },
});

export default Home;
