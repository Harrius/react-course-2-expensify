import {setStartDate, setEndDate,setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        StartDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        EndDate: moment(0)
     });   
    });

test('should generate set text filter action object', () => {
    const action = setTextFilter("David");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "David"
    });
});

test('should generate sort by amount action object', () => {
        const action = sortByAmount();
        expect(action).toEqual({
            type: "SORTBY_AMOUNT"
        });
    });


    test('should generate sort by date action object', () => {
        const action = sortByDate();
        expect(action).toEqual({
            type: "SORTBY_DATE"
         });
        });