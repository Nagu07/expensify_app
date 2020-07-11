import { v4 as uuidv4 } from 'uuid';

//ADD-EXPENSE
export const AddExpense = ({description='',note='',amount=0,createdAt=null} = {}) => ({
        type:'ADD-EXPENSE',
        expense: 
        {
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
});


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