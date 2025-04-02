import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Home from './components/Home';
import DurExercise from './components/DurExercise';
import RepExercise from './components/RepExercise';
import NavigationBar from './components/NavigationBar';

const App = () => {
  const [selection, setSelection] = useState(null);
  const [exerciseName, setExerciseName] = useState('');

  if (selection === null) {
    return (
      <View style={styles.container}>
        <NavigationBar title="Home" />
        <Home setSelection={setSelection} setExerciseName={setExerciseName} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationBar title={exerciseName} />
      {selection === 'repetition' ? (
        <RepExercise exerciseName={exerciseName} setSelection={setSelection} setExerciseName={setExerciseName} />
      ) : selection === 'duration' ? (
        <DurExercise exerciseName={exerciseName} setSelection={setSelection} setExerciseName={setExerciseName} />
      ) : null}
      <Button title="Home" onPress={() => setSelection(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1511',
  },
});

export default App;
