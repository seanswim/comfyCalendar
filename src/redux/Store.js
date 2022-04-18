import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';


const reducers = combineReducers({

})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
})

export default store;