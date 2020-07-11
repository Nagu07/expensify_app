import {createStore,combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADD-EXPENSE
const AddExpense = ({description='',note='',amount=0,createdAt=null} = {}) => {
    return{
        type:'ADD-EXPENSE',
        expense: 
        {
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
}


//REMOVE-EXPENSE
const RemoveExpense = ({id}) => {
    return{
        type:'REMOVE-EXPENSE',
        id
    }
}

//EDIT-EXPENSE
const EditExpense = (id,updates) => {
    return{
        type:'EDIT-EXPENSE',
        id,
        updates
    }
}

//SET-TEXT-FILTER
const SetTextFilter = (value = '') => {
    return{
        type:'SET-TEXT-FILTER',
        value
    }
}

//SET-START-DATE
const SetStartDate = (value = null) => {
    return{
        type:'SET-START-DATE',
        value
    }
}

//SET-END-DATE
const SetEndDate = (value = null) => {
    return{
        type:'SET-END-DATE',
        value
    }
}

//GET-VISIBLE-EXPENSE
const getVisibleExpense = (expenses,{text='',startDate='',endDate=''}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    });
};

//Blog Reducer default state
const expenseReducerDefaultState = [];

//Blog reducer
const expenseReducer = (state = expenseReducerDefaultState,action) => {
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
                })
           default:
               return state;
       }     
}

//FILTER-REDUCER-DEFAULT-STATE
const filterReducerDefaultState = {
    text:'',
    startDate:null,
    endDate:null
}

const filterReducer = (state = filterReducerDefaultState,action) => {
    switch(action.type)
    {
        case 'SET-TEXT-FILTER':
            return {...state,text:action.value}
        case 'SET-START-DATE':
            return {...state,startDate:action.value}
        case 'SET-END-DATE':
            return {...state,endDate:action.value}            
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filter : filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses,state.filter)
    console.log(visibleExpenses);
});

const Expense = {
    description : 'Rent',
    amount:500,
    createdAt:100
}

const Expense1 = {
    description : 'Coffee',
    amount:900,
    createdAt:150
}

const expenseOne = store.dispatch(AddExpense(Expense));

const expenseTwo = store.dispatch(AddExpense(Expense1));

// store.dispatch(RemoveExpense({id:expenseOne.expense.id}));

// store.dispatch(EditExpense(expenseTwo.expense.id,{amount:5}));

store.dispatch(SetTextFilter('c'));

//store.dispatch(SetStartDate(85));

//store.dispatch(SetEndDate(125));

const ExpenseDataSet = {
   Expenses : [{
        id:'sdsdsdsdsdsdsd',
        description:'This is the title',
        note:'this is a short description that explains blog',
        amount:50,
        createdAt:null
    }],
    filters:{
        searchText:'Some random text'
    }
}
