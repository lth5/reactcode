import React from 'react';
import ReactDOM from 'react-dom';
class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        console.log('item constructor --------props:',props,'state',this.state)
    }
    componentWillMount(){
        console.log('item componentWillMount --------')
    }
    componentDidMount(){
        console.log('item componentDidMount --------')
    }
    componentWillReceiveProps(){
        console.log('item componentWillReceiveProps --------')
    }
    shouldComponentUpdate(){
        console.log('item shouldComponentUpdate --------')
        return true
    }
    componentWillUpdate(){
        console.log('item componentWillUpdate --------')
    }
    componentDidUpdate(){
        console.log('item componentDidUpdate --------')
    }
    componentWillUnmount(){
        console.log('item componentWillUnmount --------')
    }
    componentWillUnmount(){
        console.log('item componentWillUnmount --------')
    }
    render(){
        console.log('list render----------',this.state)
        let num = this.props.num;
        return(
            <div>
                <div>最小子组件</div>
                <div>item-----num---------{num}</div>
            </div>
        )
    }
};
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        console.log('list constructor --------props:',props,'state',this.state)
    }
    componentWillMount(){
        console.log('list componentWillMount --------')
    }
    componentDidMount(){
        console.log('list componentDidMount --------')
    }
    componentWillReceiveProps(){
        console.log('list componentWillReceiveProps --------')
    }
    shouldComponentUpdate(){
        console.log('list shouldComponentUpdate --------')
        return true
    }
    componentWillUpdate(){
        console.log('list componentWillUpdate --------')
    }
    componentDidUpdate(){
        console.log('list componentDidUpdate --------')
    }
    componentWillUnmount(){
        console.log('list componentWillUnmount --------')
    }
    componentWillUnmount(){
        console.log('list componentWillUnmount --------')
    }
    unmountList(){
        // console.log(this.refs)
        ReactDOM.unmountComponentAtNode(document.getElementById('listContainer'))
    }
    render(){
        console.log('list render----------',this.state)
        let num = this.props.num;
        return(
            <div>
                <div>子组件</div>
                <div>list-----num---------{num}</div>
                <Item/>
            </div>
        )
    }
};
class App extends React.Component{
    constructor(props, context){
        super(props);
        console.log('context:',context)
        this.state = {
            num:0,
            onlyNum:0
        }
        console.log('app constructor --------props:',props,'state',this.state)
    }
    componentWillMount(){
        console.log('app componentWillMount --------')
    }
    componentDidMount(){
        console.log('app componentDidMount --------')
    }
    componentWillReceiveProps(){
        console.log('app componentWillReceiveProps --------')
    }
    shouldComponentUpdate(){
        console.log('app shouldComponentUpdate --------')
        return true
    }
    componentWillUpdate(){
        console.log('app componentWillUpdate --------')
    }
    componentDidUpdate(){
        console.log('app componentDidUpdate --------')
    }
    componentWillUnmount(){
        console.log('app componentWillUnmount --------')
    }
    changeNum(){
        this.setState({num:++this.state.num})
    }
    changeOnlyNum(){
        this.setState({onlyNum:++this.state.onlyNum})
    }
    unmountApp(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    unmountList(){
        ReactDOM.unmountComponentAtNode(document.getElementById('listContainer'))
    }
    forceUpdateApp(){
        this.forceUpdate();
    }
    render(){
        console.log('app render----------',this.state)
        return(
            <div>
                <div><button onClick={this.changeNum.bind(this)}>改变与子组件有关的父组件state</button></div>
                <div><button onClick={this.changeOnlyNum.bind(this)}>改变与子组件无关的父组件state</button></div>
                <div><button onClick={this.forceUpdateApp.bind(this)}>暴力刷新父组件</button></div>
                <div><button onClick={this.unmountApp.bind(this)}>移除父组件</button></div>
                <div><button onClick={this.unmountList.bind(this)}>移除子组件(无效)</button></div>
                <div id="listContainer">
                    <List num={this.state.num}/>
                </div>
                {
                    this.state.num === 0 && <List num={this.state.num}/>
                }
                
            </div>
            
        );
    }
};
ReactDOM.render(
	<App a='sss'></App>,
    document.getElementById('root'),
)
