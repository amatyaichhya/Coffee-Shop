import {configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {rootReducer} from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
