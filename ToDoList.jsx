import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ToDoList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <TouchableOpacity onPress={() => onToggleTask(index)} style={styles.textContainer}>
            <Text style={styles.taskText}>{task}</Text>
          </TouchableOpacity>
          <Button
            title="Delete"
            onPress={() => onDeleteTask(index)}
            color="#ff5c5c"
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
