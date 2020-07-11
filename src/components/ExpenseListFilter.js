import React from 'react';
import {connect} from 'react-redux';
import { SetTextFilter } from '../actions/filters';

const ExpenseListFilter = (props) => (
    <div>
        <input type='text' value={props.filter.text} onChange={(e) => {
            props.dispatch(SetTextFilter(e.target.value))
        }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return{
        filter:state.filter
    };
}

export default connect(mapStateToProps)(ExpenseListFilter);