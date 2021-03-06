import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter"
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 750, createdAt: 10}))
store.dispatch(addExpense({ description: "gas bill", amount: 500 , createdAt: 50000 }))
store.dispatch(addExpense({ description: "rent", amount: 4500, createdAt: 100}))
store.dispatch(setTextFilter( "water"))
store.dispatch(setTextFilter( ""))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
     <Provider store={store}> 
         <AppRouter />
     </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));