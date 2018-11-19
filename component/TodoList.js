import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
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

class TodoList extends Component {
  _renderItem = ({ item }) => {
    const { deleteItem } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{item.text}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            deleteItem(item);
          }}
        >
          <Text style={styles.deleteText}>DONE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        extraData={items.length}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoList;
