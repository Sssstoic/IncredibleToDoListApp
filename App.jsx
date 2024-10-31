import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Update tasks to a simple array of strings as per assignment instructions
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    // Create new task as a string
    const newTask = taskText; 
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex)); // Filter by index
  };

  const toggleTaskCompletion = (taskIndex) => {
    // Handle toggling logic if necessary; since tasks are strings, you might omit this
    // Placeholder: console.log for demonstration
    console.log(`Toggle task completion for: ${tasks[taskIndex]}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTaskCompletion} />
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
