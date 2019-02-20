import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoState from '../components/NoState.jsx'
// import CreateClassCom from '../components/CreateClassCom.jsx'
import CompinentCom from '../components/CompinentCom.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    componentWillMount() {
    
    }
    handleClick(){
        this.setState({name:222})
    }
    render() {
        return (
            <div className="main">
                <NoState name="prop init name"/>
                {/* <CreateClassCom name="ssdcs"/> */}
                <CompinentCom name="prop init name"/>
                <button onClick={this.handleClick.bind(this)}>改变props</button>
            </div>
        );
    }
}
export default App;
