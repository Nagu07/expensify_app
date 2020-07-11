import {AddExpense,RemoveExpense,EditExpense} from '../../actions/expenses';
import {SetTextFilter,SetStartDate,SetEndDate} from '../../actions/filters';

test('Should test Remove Expense',() => {
    const action = RemoveExpense({id:'1234ffg'})
    expect(action).toEqual({
        type:'REMOVE-EXPENSE',
        id:'1234ffg'
    })
})

test('Should test Edit expense',() => {
    const action = EditExpense('1234fff',{id:'1234fff',description:'This is a test',note:'This is note'})
    expect(action).toEqual({
        type:'EDIT-EXPENSE',
        id:'1234fff',
        updates:{id:'1234fff',description:'This is a test',note:'This is note'}
    })
})


/// Filter action test cases

test('Should test Set text Filter',() => {
    const action = SetTextFilter('Something in');
    expect(action).toEqual({
        type:'SET-TEXT-FILTER',
        value:'Something in'
    })
})