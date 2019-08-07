import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import createStore from './container/store';
import PropTypes from 'prop-types';

// export class Provider extends React.Component{
//     static childContextTypes = {
//         store: PropTypes.object
//     }
//     getChildContext(){
//         return {store:this.store}
//     }
//     constructor(props, context){
//         super(props, context)
//         this.store = props.store
//     }
//     render(){
//         return this.props.children
//     }
// }
// let initState = {
//     counter: {
//       count: 0
//     },
//     info: {
//       name: '',
//       description: ''
//     }
// };
// let store = createStore(initState);
ReactDOM.render(
	// <Provider store={store}>
		<App/>
    // </Provider>
    ,
	document.getElementById('root')
)