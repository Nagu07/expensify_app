import React from 'react';
import {Link} from 'react-router-dom';
import {RemoveExpense} from '../actions/expenses';
import {connect} from 'react-redux';

const ExpenseListItem = ({dispatch,id,description,amount}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount}</p>
        <button onClick={() => {
            dispatch(RemoveExpense({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);