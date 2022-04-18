import React from 'react';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { createRoot } from "react-dom/client";

const persistor = persistStore(store);

const root =createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);