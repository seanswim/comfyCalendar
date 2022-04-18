import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './Styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);