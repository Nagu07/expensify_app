//Blog Reducer default state
const expenseReducerDefaultState = [];

//Blog reducer
export default (state = expenseReducerDefaultState,action) => {
       switch(action.type)
       {
           case 'ADD-EXPENSE':
               return [...state,action.expense]
            case 'REMOVE-EXPENSE':
                return state.filter((expense) => {
                        return action.id != expense.id
                 })
            case 'EDIT-EXPENSE':
                return state.map((expense) => {
                    if(expense.id == action.id)
                    {
                        return {...expense,...action.updates};
                    }
                    else
                    {
                        return {...expense};
                    }
                })
           default:
               return state;
       }     
}