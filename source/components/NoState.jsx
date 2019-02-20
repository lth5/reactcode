import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (props) => {
    let{name} = props;
    const sayHi = () => {
        console.log(`Hello ${name}`);
    };
    return (
        <div className="outer no-state-outer">
            <div>我是无状态组件</div>
            <button onClick ={sayHi}>Say Hello</button>
        </div>
    )
}
