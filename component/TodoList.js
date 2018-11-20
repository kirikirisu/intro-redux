import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
} from 'react-native';
import Todo from './Todo';

class TodoList extends Component {
  _renderItem = ({ item }) => {
    const { deleteItem } = this.props;

    return (
      <Todo
        item={item}
        deleteItem={deleteItem}
      />
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
