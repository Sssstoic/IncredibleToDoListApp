import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet, Button } from 'react-native';

const ToDoList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id} onPress={() => onToggleTask(task.id)}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={[styles.taskText, task.completed && styles.crossedText]}>
              {task.text}
            </Text>
            <Button title="Delete" onPress={() => onDeleteTask(task.id)} />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  crossedText: {
    textDecorationLine: 'line-through',
  },
});

export default ToDoList;
