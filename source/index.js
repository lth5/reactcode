import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import './index.less';
import './lib/rem-min.js';
// let datalist = [
//     {
//         id: 1,
//         title: '看你不知道的js下',
//         status: 'todo',
//         desc: 'adadadadad',
//         tasks:[]
//     },
//     {
//         id: 2,
//         title: '看你不知道的js中',
//         status: 'doing',
//         desc: 'adadadadad',
//         tasks:[]
//     },
//     {
//         id: 3,
//         title: '看你不知道的js上',
//         status: 'done',
//         desc: 'adadadadad',
//         tasks:[]
//     }
// ]
ReactDOM.render(
	<App />,
	document.getElementById('root')
)
