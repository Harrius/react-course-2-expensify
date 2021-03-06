import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense ({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( 'abc', {note: "Rent"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            note: "Rent"
        }
    });
});

test('should setup add expense action object', () => {

    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'Last months rent'
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
      
    })
})