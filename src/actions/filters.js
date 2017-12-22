//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORTBY_AMOUNT 
export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
})

//SORTBY_DATE
export const sortByDate = () => ({
    type: 'SORTBY_DATE'
})

//SET_START_DATE 
export const setStartDate = (StartDate = '') => ({
    type: "SET_START_DATE",
    StartDate
})

//SET_END_DATE 
export const setEndDate = (EndDate = '') => ({
    type: "SET_END_DATE",
    EndDate
})