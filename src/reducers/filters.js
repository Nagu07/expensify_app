//FILTER-REDUCER-DEFAULT-STATE
const filterReducerDefaultState = {
    text:'',
    startDate:null,
    endDate:null
}

export default (state = filterReducerDefaultState,action) => {
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