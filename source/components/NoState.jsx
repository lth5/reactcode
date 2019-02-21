import React, { Component } from 'react';
import PropTypes from 'prop-types';
const NoState = (props) => {
    let{name} = props;
    const sayHi = () => {
        console.log(`Hello ${name}`);
    };
    return (
        <div className="outer no-state-outer">
            <div>我是无状态组件</div>
            <div>props.name--{props.name}</div>
            <button onClick ={sayHi}>Say Hello</button>
        </div>
    )
}
NoState.propTypes = {
    // name: PropTypes.number
    name: PropTypes.string
};
export default NoState;