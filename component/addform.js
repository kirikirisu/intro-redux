import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const AddForm = (value, onChangeText, onPress, disabled) => (
  <View>
    <TextInput style={styles.input}
      value={value}
      onChangeText={onChangeText} />
    <TouchableOpacity style={styles.addButton}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.addButtonText}>ADD</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  input: {
    margin: 4,
    padding: 10,
    borderWidth: 1,
  },
  addButton: {
    margin: 4,
    padding: 10,
    backgroundColor: '#99f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
});