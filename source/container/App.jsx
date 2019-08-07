import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createStore from './store';
import Father from '../components/context/Father.jsx'




class App extends Component {
    constructor(props) {
        super(props);
        // this.state = store.getState();
        this.state={
            a:1
        }
    }
  
    componentWillMount() {
        let a = this.state.a;
        this.setState({a:++a})
        // a = this.state.a;
        this.setState({a:++a})
      
    }
    handleClick (){
       
    }
    render() {
        return (
            <div>
                {/* <div>
                    <h2>info</h2>
                    <div>name:{this.state.info.name}</div>
                    <div>description:{this.state.info.description}</div>
                </div>
                <div>
                    <h2>counter</h2>
                    <div>count:{this.state.counter.count}</div>
                </div>
                <button onClick={this.handleClick}>add count</button> */}
                <Father/>
                {this.state.a}
            </div>
        );
    }
}
export default App;
