import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const HomeScreen = ({ navigation, tasks, onDeleteTask, onToggleTask, onAddTask }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My To-Do List</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ToDoList
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
        <ToDoForm onAddTask={onAddTask} />
      </ScrollView>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.aboutButtonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start', 
  },
  headerText: {
    color: '#2D2D2D',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginBottom: 5, 
  },
  aboutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 20, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  aboutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
