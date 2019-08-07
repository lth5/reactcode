import React, { Component } from 'react';
import GrandSon from './GrandSon.jsx'
import PropTypes from 'prop-types';

class  Son extends Component{
    static contextTypes ={
        user:PropTypes.string
    }
   
    render(){
        return (
            <div>
                <p>子组件</p>
                <div>子组件收到来自父组件的信息：{this.context.user}</div>
                <GrandSon/>
            </div>
 
        )
    }
}

export default Son