import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoState from '../components/NoState.jsx'
import CompinentCom from '../components/CompinentCom.jsx'
import Hoc from '../components/Hoc.jsx'
const MyHoc = Hoc(NoState,1,2,3,4,5,6);

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
                
                {/* <Hoc /> */}
                <MyHoc name="prop init name3"/>
                <button onClick={this.handleClick.bind(this)}>改变props</button>
                <button onClick={this.handleClick.bind(this)}>改变props</button>
       
            </div>
        );
    }
}
export default App;
