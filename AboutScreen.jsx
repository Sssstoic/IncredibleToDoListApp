import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Text>Created by: James Tuling</Text>
      <Text>App: Incredible To-Do List</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default AboutScreen;
