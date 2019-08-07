import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Son from './Son.jsx'
class Father extends Component{
    static childContextTypes ={
        user:PropTypes.string,
        b:PropTypes.string,
        changeUser:PropTypes.func
    }
    constructor(props){
        super(props)
        this.state={
            user:'哈哈儿  杜杀',
            b:2
        }
    }
    changeUser = () => {
        this.setState({
            user: '十大恶人'
        })
    }
    getChildContext(){
        return{
            ...this.state,
            changeUser: this.changeUser
        }
    }
    handleClick = ()=>{
        this.setState({b:6})
    }
    componentWillUpdate(){
        console.log(222)
    }
    componentWillReceiveProps(){
        console.log(111)
    }
    render(){
        return (
            <div>
                <p>父组件，要给孙组件:{this.state.user}</p>
                <p>父组件，要给孙组件:{this.state.user}</p>
                {this.state.b}
                <button onClick={this.handleClick}>set state</button>
                <Son/>
            </div>
        )
    }
}

export default Father