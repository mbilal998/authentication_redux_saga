import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// For Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// For Connected React Router
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

// Root Reducer and Root saga created by developer
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

const persistConfig = {
  key: "currentUser",
  storage,
  whitelist: ["current_main"],
};

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

export { configureStore };
