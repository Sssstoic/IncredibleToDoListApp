import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ToDoList = ({ tasks, onDeleteTask, onToggleTask }) => {
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessage}>No tasks available. Add some!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          {/* Touchable for toggling task completion */}
          <TouchableOpacity
            onPress={() => onToggleTask(index)}
            style={styles.textContainer}
          >
            <Text
              style={[
                styles.taskText,
                task.completed && styles.completedTaskText, // Apply completed styles conditionally
              ]}
            >
              {task.text}
            </Text>
          </TouchableOpacity>

          {/* Delete button */}
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
    color: '#000',
  },
  completedTaskText: {
    textDecorationLine: 'line-through', // Strike-through for completed tasks
    color: '#aaa', // Dimmed color for completed tasks
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888',
  },
});

export default ToDoList;
