import selectExpenses from '../../selectors/expenses';

const testData = [{
    id: 1,
    description: "RENT",
    note: '',
    amount: 450000, 
    createdAt: 2
},
{
    id: 2,
    description: "GUM",
    note: '',
    amount: 45, 
    createdAt: 1
},
{
    id: 3,
    description: "CLOTHES",
    note: '',
    amount: 450000, 
    createdAt: 0
}]

test('Should return data filtered by text', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(testData, filters);
    expect(result).toEqual([ testData[0], testData[2]]);
});