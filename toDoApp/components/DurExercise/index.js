import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const exercises = [
  { name: 'Push Ups', type: 'repetition' },
  { name: 'Bicycling', type: 'duration' },
  { name: 'Jumping Jacks', type: 'repetition' },
  { name: 'Running', type: 'duration' },
  { name: 'Sit Ups', type: 'repetition' },
];

const DurExercise = ({ exerciseName, setSelection, setExerciseName }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setElapsedTime(0);
  };

  const timeFormat = (ms) => {
    const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (ms % 1000).toString().padStart(3, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  //suggested exercise
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
      <Text style={styles.timerText}>Timer: {timeFormat(elapsedTime)}</Text>
      <Button title="Start" onPress={startTimer} />
      <Button title="Stop" onPress={stopTimer} />
      <Button title="Reset" onPress={resetTimer} />
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
  timerText: {
    color: '#BBE40D',
    fontSize: 24,
    fontFamily: 'Jersey 25',
    marginBottom: 20,
  },
});

export default DurExercise;
