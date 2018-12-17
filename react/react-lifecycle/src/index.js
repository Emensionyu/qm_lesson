import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// React.createElement() render()
class LifeCycle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            str:"你好",
            name:"没有账号"
        }
        setTimeout(()=>{
            this.setState({
                str:"hello"
            })
        },2000)
        
    }
componentWillMount(){
        console.log('component Will Mount');
    }
componentDidMount(){
    console.log("组件已经挂载了");
    // UI Ready 壳子先渲染最快看到壳子，接着再ajax，取数据，不会阻塞界面
    fetch('https://api.github.com/users/Emensionyu')
    .then(data=>data.json())
    .then(data=>{
        this.setState({
            name:data.name

        })
    })
}
componentWillUpdate(){
    console.log('组件即将更新')
}
componentDidUpdate(){
    console.log('组件更新了')
}
componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProp" +nextProps)
}
// nextProps 新接受但不是页面上已有的
shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState,this.props.num ,'值没有改变，不要更新');
    if(nextProps.num===this.props.num){
        console.log(nextProps,this.props.num ,'值没有改变，不要更新');
        return false;
    }
    return true;//性能优化的核心函数
}
componentWillUnmount(){
    console.log('组件即将被卸载了')
}

render(){
    return(
        <div>
            <div>{this.state.name}</div>
            <span>{parseInt(this.props.num)}</span>
            <span>
                <span>
                    <h2>{this.state.str}</h2>
                </span>
            </span>
        </div>
    )
}

}
class App extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.setState({
                num:3
            })
        },5000);
        setTimeout(()=>{
            this.setState({
                showLifeCycle:false
            })
        },10000)
    }
    state={
        num:2,
        showLifeCycle:true

    }
    render(){
        if(!this.state.showLifeCycle)
        return <div>hahhhahahhahah</div>;
        return(
            <LifeCycle num={this.state.num}/>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
