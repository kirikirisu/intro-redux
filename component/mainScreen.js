import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import AddForm from './addform';
import List from './list';
import { getData, storeData } from '../util/storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default class mainScreen extends Component {
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
      items,
      text,
    } = this.state;

    if (text.length === 0) {
      return;
    }

    items.push({ id: Date.now().toString(), text });
    this.setState({
      text: '',
      items,
    });
    storeData(JSON.stringify(items));
  };

  _deleteItem = (item) => {
    const { items } = this.state;
    const filtered = items.filter(element => element.id !== item.id);

    this.setState({
      items: filtered,
    });
    storeData(JSON.stringify(items));
  };

  render() {
    const {
      text,
      loaded,
      items,
    } = this.state;
    return (
      <View style={styles.container}>
        <AddForm
          text={text}
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
