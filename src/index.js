import React from 'react';
import ReactDOM from 'react-dom';


import Todolist from './components/Todolist2.js'

// 不用管，只是加快react 运行的js文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 

    <Todolist></Todolist>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
