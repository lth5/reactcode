import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ajax from '../../utils/ajax.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    };
    getKuayuAjax = () => {
        ajax.get('http://localhost:3000/kuayu/cross').then(
            (data)=>{
                console.log(data);
            }
        ).catch((err)=>{
            console.log(err)
        })
    };
    getKuayuAjaxByJsonp = () => {
        ajax.jsonp('http://localhost:3000/kuayu/jsonp/1').then(
            (data)=>{
                console.log(data[0]);
            }
        ).catch((err)=>{
            console.log(err)
        })
    };
    getKuayuAjaxByJsonp2 = () => {
        ajax.jsonp('http://localhost:3000/kuayu/jsonp/2').then(
            (data)=>{

                console.log(data[0]);
            }
        ).catch((err)=>{
            console.log(err)
        })
    };
    componentWillMount() {
    
    };
    render() {
        return (
            <div>
                <button onClick={this.getKuayuAjax}>获取跨域数据</button>
                <button onClick={this.getKuayuAjaxByJsonp}>获取跨域数据jsonp</button>
                <button onClick={this.getKuayuAjaxByJsonp2}>获取跨域数据jsonp2</button>
            </div>
        );
    };
}
export default App;
