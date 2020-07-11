//SET-TEXT-FILTER
export const SetTextFilter = (value = '') => {
    return{
        type:'SET-TEXT-FILTER',
        value
    }
}

//SET-START-DATE
export const SetStartDate = (value = null) => {
    return{
        type:'SET-START-DATE',
        value
    }
}

//SET-END-DATE
export const SetEndDate = (value = null) => {
    return{
        type:'SET-END-DATE',
        value
    }
}