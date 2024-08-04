import { createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore( persistedReducer, undefined, composedEnhancers);

const persistor = persistStore(store);

export { store, persistor };
