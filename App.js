import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import MainScreen from './component/MainScreen';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;
