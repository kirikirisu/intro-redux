import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';
import AddForm from './component/addform';
import List from './component/list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default class App extends Component {
  static STORAGE_KEY = '@RememberTheCheese:items';

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const json = await AsyncStorage.getItem(App.STORAGE_KEY);

    if (json !== null) {
      const items = JSON.parse(json);
      this.setState({
        items,
        loaded: true,
      });
    }
  }

  _onChange = (text) => {
    this.setState({ text });
  }

  _addItem = () => {
    const {
      items,
      text,
    } = this.state;

    if (text.length === 0) {
      return;
    }
    items.push({ key: Date.now(), value: text });
    this.setState({
      text: '',
      items,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(items));
  }

  _deleteItem = (item) => {
    const { items } = this.state;
    const filtered = items.filter(element => element.key !== item.key);

    this.setState({
      items: filtered,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(items));
  }

  render() {
    const {
      text,
      loaded,
      items,
    } = this.state;
    return (
      <View style={styles.container}>
        <AddForm
          value={text}
          onChangeText={this._onChange}
          onPress={this._addItem}
          disabled={loaded && text.length === 0}
        />
        <List
          items={items}
          deleteItem={this._deleteItem}
        />
      </View>
    );
  }
}
