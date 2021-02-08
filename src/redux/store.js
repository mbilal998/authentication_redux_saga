import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history), // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), sagaMiddleware
            ),
        ),
    )
    sagaMiddleware.run(rootSaga);
    return store
}

export default configureStore;
