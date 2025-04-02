import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const exercises = [
  { name: 'Push Ups', type: 'repetition' },
  { name: 'Bicycling', type: 'duration' },
  { name: 'Jumping Jacks', type: 'repetition' },
  { name: 'Running', type: 'duration' },
  { name: 'Sit Ups', type: 'repetition' },
  { name: 'Weightlifting', type: 'strength' },
];

const RepExercise = ({ exerciseName, setSelection, setExerciseName }) => {
  const [repCount, setRepCount] = useState(0);

 // suggested exercise
  const getRandomExercise = () => {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    return randomExercise;
  };

  const suggestedExercise = getRandomExercise(); 

  const handleSuggestedPress = () => {
    setExerciseName(suggestedExercise.name);
    setSelection(suggestedExercise.type); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reps: {repCount}</Text>
      <Button title="Complete Rep" onPress={() => setRepCount(repCount + 1)} />
      <Button title="Reset" onPress={() => setRepCount(0)} />
      <Button
        title={`Suggested: ${suggestedExercise.name}`}
        onPress={handleSuggestedPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1511',
    padding: 20,
  },
  text: {
    color: '#BBE40D',
    fontSize: 24,
    fontFamily: 'Jersey 25',
    marginBottom: 20,
  },
});

export default RepExercise;
