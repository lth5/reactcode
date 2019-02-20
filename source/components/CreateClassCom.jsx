import React from 'react';
import ReactDOM from 'react-dom';
const CreateClassCom = React.createClass({ 
    getDefaultProps:function() {
        return { name: false } 
    }, 
    getInitialState: function() { 
        return { name: this.props.name }; 
    }, 
    componentWillMount:function (){
        this.setState({ name: 'name init' }); 
    },
    handleClick: function(event) { 
        this.setState({ name: 'name 变了' }); 
    }, 
    render: function() { 
        console.log(this.props,this.state)
        return ( 
        <div className="outer">
            <div>我是CreateClass状态组件</div>
            <div>props.name--{this.props.name}</div>
            <div>state.name--{this.state.name}</div>
            <button onClick ={this.handleClick}>改变name</button>
        </div>
        ); 
    } 
});
export default CreateClassCom;