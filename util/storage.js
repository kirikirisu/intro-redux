import {
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = '@RememberTheCheese:items';

export const getData = async () => {
  let data = [];
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const parseJson = JSON.parse(json);
    if (Array.isArray(parseJson)) {
      data = parseJson;
    }
  } catch (e) {
    console.error(e);
  }

  return data;
};

export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
};
