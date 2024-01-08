// Using normal redux
// import { createStore } from 'redux';

// const counterReducer = (state = { counter: 0, showCounter: true }, action) =>{
//     if(action.type === 'incrementby2'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrementby2'){
//         return {
//             counter: state.counter - 2,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'incrementBy5'){
//         return {
//             counter: state.counter + 5,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrementBy5'){
//         return {
//             counter: state.counter - 5,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggleCounter'){
//           return{
//             counter: state.counter,
//             showCounter : !state.showCounter
//           }
//     }
//     return state;
// }

// const store = createStore(counterReducer);

// export default store;

//Using Redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;