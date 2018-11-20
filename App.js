import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainScreen from './component/MainScreen';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;
