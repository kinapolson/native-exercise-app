import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationBar = ({ title }) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BBE40D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BBE40D',
  },
});

export default NavigationBar;
