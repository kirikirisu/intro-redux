import {
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = '@RememberTheCheese:items';

export const getData = async () => {
  let text = [];
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (Array.isArray(json)) {
      text = JSON.parse(json);
    }
  } catch (e) {
    console.error(e);
  }

  return text;
};

export const storeData = async (text) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(text));
  } catch (e) {
    console.error(e);
  }
};
