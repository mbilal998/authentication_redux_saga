import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const persistConfig = {
    key: 'currentUser',
    storage,
    whitelist: ['current_main']
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
let persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store, persistor };
