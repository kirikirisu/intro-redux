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

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const items = await getData();

    this.setState({
      items,
      loaded: true,
    });
  }

  _onChange = (text) => {
    this.setState({ text });
  };

  _addItem = () => {
    const {
      text,
      items,
    } = this.state;

    if (!text.trim()) {
      return;
    }
    items.push({ id: Date.now().toString(), text });

    this.setState({
      text: '',
      items,
    });
    storeData(items);
  };

  _deleteItem = (item) => {
    const { items } = this.state;
    const filtered = items.filter(element => element.id !== item.id);

    this.setState({
      items: filtered,
    });
    storeData(items);
  };

  render() {
    const {
      text,
      loaded,
      items,
    } = this.state;
    return (
      <View style={styles.container}>
        <AddTodo
          text={text}
          onChangeText={this._onChange}
          onPress={this._addItem}
          disabled={loaded && !text.trim()}
        />
        <TodoList
          items={items}
          deleteItem={this._deleteItem}
        />
      </View>
    );
  }
}
