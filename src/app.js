import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { AddExpense,EditExpense,RemoveExpense } from './actions/expenses';
import {SetTextFilter} from './actions/filters';
import visibleExpense from './selectors/expenses';
import './styles/style.scss';

const store = configureStore();

store.dispatch(AddExpense({description:'water',amount:10000}));

store.dispatch(AddExpense({description:'grocery',amount:20000}));

//store.dispatch(SetTextFilter('ter'));

const state = store.getState();
console.log(state);


const visibleExpense1 = visibleExpense(state.expenses,state.filter);

console.log(visibleExpense1);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));