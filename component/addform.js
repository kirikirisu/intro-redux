import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 4,
    padding: 10,
    borderWidth: 1,
  },
  addButton: {
    margin: 4,
    padding: 10,
    backgroundColor: '#99f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
});

const AddForm = ({ text, onChangeText, onPress, disabled }) => (
  <View>
    <TextInput
      style={styles.input}
      text={text}
      onChangeText={onChangeText}
    />
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.addButtonText}>ADD</Text>
    </TouchableOpacity>
  </View>
);

AddForm.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default AddForm;
