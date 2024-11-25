import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

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
              {...props}
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

export default App;
