import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var Store={
    _handlers:[],
    _flag:false,
    subscribe:function(handler){
        this._handlers.push(handler);
    },
    set:function(value){
        this._flag=value;
        this._handlers.forEach(handler=>handler(value));
        //handler() 
    },
    get:function(){
        return this._flag;
        //做修饰
    }
    
}
function Switcher({value,onChange}){
    return(
        <button onClick={e=>onChange(!value)}>
        {value?'light on':'light off'}
        </button>
    )
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:Store.get()
        }
        // subscribe(Store.set(88)) 引起render重新渲染
        Store.subscribe((value)=>{
            console.log(value+"subscribe");
            this.setState({value})
        })
    }
    render(){
        return (
            <div>
                <Switcher
                 value={this.state.value}
                 onChange={Store.set.bind(Store)}
                 //执行时引起set操作 引起store更新 相当于dispatch操作 
                 //dispatch 返回新的store set改变Store里——flage全局状态的值 
                 //dispatch  listeners.forEach(item=>item())  获取新的状态 setstate render
                 //set  this._handlers.forEach(handler=>handler(value)); 获取新的状态 setstate render
                 //把subscribe里push进的全局状态改变机制引起setdata再次执行 
                 //switcher组件重新render 
                 //这种写法没有dispatch里的 storeChange方法触发更多的switch case操作 
                />
                {this.state.value}

            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
