import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  delete: {
    margin: 4,
    padding: 10,
    marginLeft: 'auto',
    backgroundColor: '#f00',
  },
  deleteText: {
    color: '#fff',
  },
});

const Todo = ({ todo, removeTodo }) => (
  <View style={styles.container}>
    <Text style={styles.item}>{todo.text}</Text>
    <TouchableOpacity
      style={styles.delete}
      onPress={() => removeTodo(todo.id)}
    >
      <Text style={styles.deleteText}>DONE</Text>
    </TouchableOpacity>
  </View>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
