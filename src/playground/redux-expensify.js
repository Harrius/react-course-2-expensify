import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//Actions

//ADD_EXPENSE
const addExpense = ({
    description = '',
     note = '', 
     amount=0, 
     createdAt=0 } = {}
    ) => 
    ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


//EDIT_EXPENSE 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORTBY_AMOUNT 
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
})

//SORTBY_DATE
const sortByDate = () => ({
    type: 'SORTBY_DATE'
})

//SET_START_DATE 
const setStartDate = (Start = '') => ({
    type: "SET_START_DATE",
    Start
})

//SET_END_DATE 
const setEndDate = (End = '') => ({
    type: "SET_END_DATE",
    End
})


//Expenses Reducer

const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        return [
         ...state,
         action.expense
        ];
        case 'REMOVE_EXPENSE' :
        return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE' :
        return state.map(expense => {
        if (expense.id === action.id) {
            return {
            ...expense,
            ...action.updates
            }
        }
        else {
            return expense;
            }
        })
        default:
         return state;
    }
};



//filters reducers

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined 
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

//filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    } )
    .sort((a, b) => {
        if (sortBy === "date") { 
        return a.createdAt < b.createdAt ? 1 : -1;
        }
       else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}



//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const ExpenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 500,
    createdAt: -11000
}));

const ExpenseTwo = store.dispatch(addExpense({
    description: 'Clothes',
    amount: 200,
    createdAt: -1000
}));

/** 
store.dispatch(removeExpense({ id: ExpenseOne.expense.id}));
store.dispatch(editExpense(ExpenseTwo.expense.id, {amount: 500}));
store.dispatch(setTextFilter('rent'));


store.dispatch(sortByDate());


*/

store.dispatch(sortByAmount());

store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'dsdsdsddsfre',
        description: "January Rent",
        note: 'Final payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

}

const user = {
    name: "Jon B",
    age: 23
}

console.log({...user, location: "JHB"})