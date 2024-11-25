import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Ensure HomeScreen is in the right path
import AboutScreen from './AboutScreen'; // Same for AboutScreen
import ToDoList from './ToDoList'; // Keep your ToDoList and ToDoForm where they belong
import ToDoForm from './ToDoForm';

function App() {
  const Stack = createStackNavigator();

  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false },
  ]);

  const toggleTaskCompletion = (taskIndex) => {
    setTasks(tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (taskText) => {
    if (taskText.trim() && !tasks.some(task => task.text === taskText)) {
      setTasks([...tasks, { text: taskText, completed: false }]);
    } else {
      alert('Task is empty or already exists!');
    }
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props} // Ensure you pass navigation and route props
              tasks={tasks}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTaskCompletion}
              onAddTask={addTask}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
