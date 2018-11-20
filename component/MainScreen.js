import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { getData, storeData } from '../util/storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const todos = await getData();

    this.setState({
      todos,
      loaded: true,
    });
  }

  _onChangeText = text => this.setState({ text });

  _addTodo = () => {
    const {
      text,
      todos,
    } = this.state;

    if (!text.trim()) {
      return;
    }
    todos.push({ id: Date.now().toString(), text });

    this.setState({
      text: '',
      todos,
    });
    storeData(todos);
  };

  _removeTodo = (todo) => {
    const { todos } = this.state;
    const filtered = todos.filter(element => element.id !== todo.id);

    this.setState({
      todos: filtered,
    });
    storeData(filtered);
  };

  render() {
    const {
      text,
      loaded,
      todos,
    } = this.state;

    return (
      <View style={styles.container}>
        <AddTodo
          text={text}
          onChangeText={this._onChangeText}
          onPress={this._addTodo}
          disabled={loaded && !text.trim()}
        />
        <TodoList
          todos={todos}
          removeTodo={this._removeTodo}
        />
      </View>
    );
  }
}

export default MainScreen;
