import {
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = '@RememberTheCheese:items';

export const getData = async () => {
  let value = [];
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (Array.isArray(json)) {
      value = JSON.parse(json);
    }
  } catch (e) {
    console.error(e);
  }

  return value;
};

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};
