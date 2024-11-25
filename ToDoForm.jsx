import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import tasksData from './tasks.json';

const TodoForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(tasksData.tasks || []);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleAddTask = () => {
    const trimmedTask = inputValue.trim();
    if (trimmedTask) {
      onAddTask(trimmedTask);
      setInputValue('');
      inputRef.current.focus();
    } else {
      Alert.alert('Error', 'Task cannot be empty!', [{ text: 'OK' }]);
    }
  };

  const handleRandomTask = () => {
    if (tasks.length > 0) {
      setLoading(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * Math.min(tasks.length, 10));
        const randomTask = tasks[randomIndex];
        setInputValue(randomTask);
        setLoading(false);
      }, 500);
    } else {
      Alert.alert('Error', 'No tasks available to choose from!', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#888"
        value={inputValue}
        onChangeText={setInputValue}
        returnKeyType="done"
        onSubmitEditing={handleAddTask}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.randomButton, tasks.length === 0 && styles.disabledButton]}
          onPress={handleRandomTask}
          disabled={tasks.length === 0}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Generate Random Task</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    width: '100%',
    maxWidth: 350,
    height: 50,
    borderWidth: 1,
    borderColor: '#4e9c9f',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 20,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#f4f4f4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 350,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#4e9c9f',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  randomButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default TodoForm;
