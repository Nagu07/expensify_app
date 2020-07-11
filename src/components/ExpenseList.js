import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseSelector from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>This is Expense List page</h1>
        {
        props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return{
        expenses:ExpenseSelector(state.expenses,state.filter)
    };
}

export default connect(mapStateToProps)(ExpenseList);