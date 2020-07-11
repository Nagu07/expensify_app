console.log('redux JS running');

import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
    return{
        type:'INCREMENT',
        incrementBy
    };
}

const decrementCount = ({decrementCount = 1} = {}) => {
        return {
            type:'DECREMENT',
            decrementCount
        }
}

const store = createStore((state = {count:10},action) => {
    switch(action.type)
    {
        case 'INCREMENT':{
            const incrementBy = action.incrementBy;
            return{
                count:state.count + incrementBy
            };
        }
        case 'DECREMENT':{
            return{
                count:state.count - action.decrementCount
            };
        }
        case 'RESET':{
            return{
                count:0
            };
        }
        default:
            return state;
    }
    return state
})

// store.dispatch(
//     {
//         type:'INCREMENT'
//     }
// );
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(decrementCount({decrementCount:10}));
