// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './container/App.jsx';
// import {createStore} from 'redux'
// var reducer = (state = 0, action) => {
//     if (!action) return state;
   
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// const store=createStore(reducer);

// ReactDOM.render(
// 	<App  />,
// 	document.getElementById('root')
// )
// function createStore(reducer) {
//     var state;
//     var listeners = [];
//     var getState = () => state;
//     var dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(l=>l());
//     }
//     var subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter((l) => l != listener)
//         }
//     }
//     dispatch();
//     return {
//         getState, dispatch, subscribe
//     }
// }
        
import {createStore} from 'redux';
var reducer = (state = 0, action) => {
    if (!action) return state;
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
var store = createStore(reducer);
var a = store.subscribe(function () {
    document.querySelector('#counter').innerHTML = store.getState();
});


document.querySelector('#addBtn').addEventListener('click', function () {
    console.log(a());
    store.dispatch({type: 'INCREMENT'});
});
document.querySelector('#minusBtn').addEventListener('click', function () {
    store.dispatch({type: 'DECREMENT'});
});
                    
