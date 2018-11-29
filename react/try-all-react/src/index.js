import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
class HelloUser extends 
React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'mensionyu'
        }
        // setTimeout(()=>{
        //     this.setState({
        //         username:'哈哈哈'
        //     })
        // },3000)
        this.handleChange=this.handleChange.bind(this);
    }
    render(){
        return (
            <div>
                Hello World!{this.state.username}
                <input 
                type="text"
                value={this.state.username}
                // onChange={(e)=>{this.handleChange(e)}}
                onChange={this.handleChange}
                
                />
            </div>);
    }
    handleChange(e){
        console.log(this)//undefined
        this.setState({
            username:e.target.value
        })
        console.log(e.target.value);
        

    }
        
        // return React.createElement(//状态改变自动更新 唯一的外层包裹元素 this变化多端(bind)
        
        //     'div',
        //     null,
        //     React.createElement("p",null,"222")

        // )
    
}

ReactDOM.render(<HelloUser />,
 document.getElementById('root'));
serviceWorker.unregister();
