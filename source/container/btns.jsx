import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from './store';

class App extends Component {
    constructor(props) {
        super(props);
    };
  
    componentWillMount() {
        this.unsub = store.subscribe(()=>{
            this.setState(store.getState());
        })
    };
    addCount (){
        store.dispatch({
            type: 'add'
        });
    }
    delCount (){
        store.dispatch({
            type: 'shift'
        });
    }
    unsublis (){
        this.unsub();
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.addCount}>add</button>
                <button onClick={this.delCount}>--</button>
                <button onClick={this.unsublis.bind(this)}>unsub</button>
            </div>
        );
    }
}
export default App;
