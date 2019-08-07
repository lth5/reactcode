import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrandSon extends Component{
    static contextTypes ={
        user:PropTypes.string,
        changeUser:PropTypes.func
    }
    changeUser = ()=>{
        this.context.changeUser && this.context.changeUser();
    }
    render(){
        return (
            <div>
                <p>孙组件</p>
                <div>孙组件收到来自父组件的信息：{this.context.user}</div>
                <button onClick={this.changeUser}> change </button>
            </div>
        )
    }
}

export default GrandSon