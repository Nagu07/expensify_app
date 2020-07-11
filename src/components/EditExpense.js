import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {EditExpense} from '../actions/expenses';

const EditExpenseComponent = (props) => {
    return(
    <div>
        <h1>Edit Expense page</h1>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense)=>
            {
                //console.log(props.expense.id);
                props.dispatch(EditExpense(props.expense.id,expense));
                props.history.push('/');    
             }}
        />    
    </div>
)
};

const mapStateToProps = (state,props) => {
    return{
        expense:state.expenses.find((expense) => expense.id == props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpenseComponent);