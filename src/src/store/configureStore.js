import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// reducers
import userDataReducer from '../reducers/user-data.reducer';
import csvDataReducer from '../reducers/csv-data.reducer';
import paginatedDataReducer from '../reducers/paginated-data.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const middlewares = [thunk, sagaMiddleware];
    const store = createStore(
        combineReducers({
            csvData: csvDataReducer,
            userData: userDataReducer,
            paginatedData: paginatedDataReducer,
        }),
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
}