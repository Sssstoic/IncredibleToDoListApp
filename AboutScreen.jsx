import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="check-circle" size={120} color="#007BFF" style={styles.icon} />
      <Text style={styles.headerText}>Incredible To-Do List</Text>
      <Text style={styles.descriptionText}>
        An easy-to-use, efficient task manager to keep your day organized.
      </Text>
      <Text style={styles.infoText}>Created by: James Tuling</Text>
      <Text style={styles.infoText}>Date: {new Date().toLocaleDateString()}</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2D2D2D',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2D2D2D',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AboutScreen;
