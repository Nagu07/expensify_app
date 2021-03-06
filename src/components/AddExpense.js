import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpenseComponent = (props) => (
    <div>
        <ExpenseForm onSubmit={(expense)=>
        {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
            
        }}/>
    </div>
);

export default connect()(AddExpenseComponent);