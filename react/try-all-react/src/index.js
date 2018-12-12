import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class HelloWorld extends
// React.Component{
//     render () {
//         // (1 + 2) * 3
//         // return(
//         //     <div>Hello World!</div>
//         // );
//         return React.createElement('div',null,React.createElement('p',null,'222'))
//     }
// }

class HelloUser extends
React.Component{
    constructor(props){
        super(props);//先继承一下
        this.state = {
            username:'liaoying'
        }
        // 定时器
        // setTimeout(()=>{
        //     this.setState({
        //         username:"ly"
        //     })
        // },1000);

        this.handleChange = this.handleChange.bind(this);
    }
    
    render() {
        // return React.createElement('div',{className ="username"},this.state.name)
        return(
           <div>Hello{this.state.username}
            <input type="text" value={this.state.username} 
            onFocus = {() => {}}
            onChange={(e)=>{this.handleChange(e)}}/> 
           </div>
        //    /* 函数形成了一个闭包 */
           
        );
    }
    handleChange (e){
        // ？为什么不能删除？ 因为该value => this.state.username 已经被绑定了。
        console.log(this)
        this.setState ({
            username:e.target.value
        })
        console.log(e.target.value);//target.value 就是我们输入的值。
    }

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

