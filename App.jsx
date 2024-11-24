import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim() && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]); // Add new task to the list
    } else {
      alert('Task is empty or already exists!'); // Handle duplicate or empty tasks
    }
  };

  // Function to delete a task
  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex)); // Remove task by index
  };

  // Function to toggle task completion (optional, placeholder logic)
  const toggleTaskCompletion = (taskIndex) => {
    // Placeholder functionality for toggling task state
    console.log(`Toggle task completion for: ${tasks[taskIndex]}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Pass tasks and event handlers to ToDoList */}
      <ToDoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTaskCompletion}
      />
      {/* Pass addTask function to ToDoForm */}
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
