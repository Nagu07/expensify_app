import {createStore,combineReducers,applyMiddleware} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filter : filterReducer
    }),
    applyMiddleware(thunk)
);
return store
}