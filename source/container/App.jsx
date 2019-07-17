import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createStore from './store'

let initState = {
    counter: {
      count: 0
    },
    info: {
      name: '',
      description: ''
    }
};
let store = createStore(initState);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

    }
  
    componentWillMount() {
    
        store.subscribe(() => {
            let state = store.getState();
            console.log(`${state.info.name}：${state.info.description}`);
        });
        store.subscribe(() => {
            let state = store.getState();
            this.setState(state)
        });
    }
    handleClick (){
        store.changeState({
            ...store.getState(),
            info: {
              name: '前端九部',
              description: '我们都是前端爱好者！'
            }
        });
    }
    render() {
        return (
            <div>
                <div>
                    <h2>info</h2>
                    <div>name:{this.state.info.name}</div>
                    <div>description:{this.state.info.description}</div>
                </div>
                <div>
                    <h2>counter</h2>
                    <div>count:{this.state.counter.count}</div>
                </div>
                <button onClick={this.handleClick}>add count</button>
            </div>
        );
    }
}
export default App;
