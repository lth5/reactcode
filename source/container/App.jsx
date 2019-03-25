import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoState from '../components/NoState.jsx'
import CompinentCom from '../components/CompinentCom.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    componentWillMount() {
        console.log(222)
    }
    handleClick(){
        this.setState({name:222})
    }
    render() {
        return (
            <div className="main">
                <NoState name="prop init name"/>
                <CompinentCom name="prop init name"/>
                <button onClick={this.handleClick.bind(this)}>改变props</button>
                <button onClick={this.handleClick.bind(this)}>改变props</button>
       
            </div>
        );
    }
}
export default App;
