import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
} from 'react-native';
import Todo from './Todo';

class TodoList extends Component {
  _renderItem = ({ item }) => {
    const { removeTodo } = this.props;

    return (
      <Todo
        todo={item}
        removeTodo={removeTodo}
      />
    );
  };

  render() {
    const { todos } = this.props;

    return (
      <FlatList
        data={todos}
        extraData={todos.length}
        renderItem={this._renderItem}
        keyExtractor={todo => todo.id}
      />
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
