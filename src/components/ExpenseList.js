import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
      
      {
          props.expenses === 0? (
              <p> No expenses </p>
          ) : ( 
              props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id}
            {...expense} />
              })
            )
     
       }
    </div> 
    );

    const mapStateToProps = (state) => {
        return {
            expenses: selectExpenses(state.expenses, state.filters)
            };
        };


export default connect(mapStateToProps)(ExpenseList);