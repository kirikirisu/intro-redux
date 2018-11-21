import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainScreen from './component/MainScreen';
import reducer from './reducers';

const store = createStore(
  reducer,
);

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;
