import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORTBY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };
        case 'SORTBY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.Start
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.End
        };

        default: 
            return state;
    }
}

export default filtersReducer;