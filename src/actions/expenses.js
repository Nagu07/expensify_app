import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

//ADD-EXPENSE
export const AddExpense = (expense) => ({
        type:'ADD-EXPENSE',
        expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description='',note='',amount=0,createdAt=null
        } = expenseData
        const expense = {description,note,amount,createdAt}
        database.ref('expenses').push(expense).then(() => {
            dispatch(AddExpense({
                id:expense.key,
                ...expense
            }))
        })
    }
}

//REMOVE-EXPENSE
export const RemoveExpense = ({id}) => (
    {
        type:'REMOVE-EXPENSE',
        id
    }
);

//EDIT-EXPENSE
export const EditExpense = (id,updates) => (
    {
        type:'EDIT-EXPENSE',
        id,
        updates
    }
);

//SET-EXPENSES
export const SetExpenses = (expenses) => (
    {
        type:'SET-EXPENSE',
        expenses
    }
);

//START SET EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {           
        const expenses = [];
        snapshot.forEach((childSnapShot) => {
                expenses.push({
                    id:childSnapShot.key,
                    ...childSnapShot.val()
                })
            })
            dispatch(SetExpenses(expenses));
        })
    }
}