import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Ensure this path is correct
import ToDoForm from './ToDoForm'; // Ensure this path is correct

const HomeScreen = ({ navigation, tasks, onDeleteTask, onToggleTask, onAddTask }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')} // navigation should work here
      />
      <ToDoList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
      />
      <ToDoForm onAddTask={onAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
