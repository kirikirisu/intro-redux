import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

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
    };
  }

  _onChangeText = text => this.setState({ text });

  render() {
    const {
      text,
    } = this.state;

    return (
      <View style={styles.container}>
        <AddTodo
          text={text}
          onChangeText={this._onChangeText}
        />
        <TodoList />
      </View>
    );
  }
}

export default MainScreen;
