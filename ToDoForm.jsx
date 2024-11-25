import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ToDoForm = ({ onAddTask }) => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    const trimmedTask = inputValue.trim();
    if (trimmedTask) {
      onAddTask(trimmedTask);
      setInputValue('');
    } else {
      Alert.alert('Error', 'Task cannot be empty!', [{ text: 'OK' }]);
    }
  };  

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={inputValue}
        onChangeText={setInputValue}
        returnKeyType="done" // Ensures keyboard provides a "done" button
        onSubmitEditing={handleAddTask} // Handles task addition on Enter/Done key
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10, // More consistent spacing
    paddingVertical: 12, // More comfortable input area    
    marginRight: 10,
  },
});

export default ToDoForm;
