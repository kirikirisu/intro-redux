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

const Todo = ({ item, deleteItem }) => (
  <View style={styles.container}>
    <Text style={styles.item}>{item.text}</Text>
    <TouchableOpacity
      style={styles.delete}
      onPress={() => deleteItem(item)}
    >
      <Text style={styles.deleteText}>DONE</Text>
    </TouchableOpacity>
  </View>
);

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Todo;
