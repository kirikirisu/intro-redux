import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  addTodo,
} from '../actions';

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

const AddTodo = ({ text, onChangeText, dispatch }) => (
  <View>
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChangeText}
      onSubmitEditing={() => dispatch(addTodo(text))}
    />
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => dispatch(addTodo(text))}
    >
      <Text style={styles.addButtonText}>ADD</Text>
    </TouchableOpacity>
  </View>
);

AddTodo.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};


export default connect()(AddTodo);
