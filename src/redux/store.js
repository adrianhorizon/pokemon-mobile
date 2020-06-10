import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selectedHotel'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
