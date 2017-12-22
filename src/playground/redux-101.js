import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case "INCREMENT":
            return{
                count: state.count + 4
            }
        case "DECREMENT":
            return{
                count: state.count - 1
            }
        case "RESET":
            return{
                count: 0
            }
        default: 
            return state;
    }
});


//action to increment count
store.dispatch({
    type: 'INCREMENT'
});

//action to decrement count 
store.dispatch({
    type: 'DECREMENT'
})

//action to reset count 
store.dispatch({
    type: 'RESET'
})



console.log(store.getState());
