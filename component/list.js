import React, { Component } from 'react';
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


export default class List extends Component {
  _renderItem = ({ item }) => {
    const { deleteItem } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{item.value}</Text>
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
      />
    );
  }
}
