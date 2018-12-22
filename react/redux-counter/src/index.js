import React from 'react';
import ReactDOM from 'react-dom';
import  { createStore } from 'redux';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import counter from './reducers'
//生产状态的地方状态计算器
// 单独管理状态的地方 
// 状态与UI统一，状态计算器 reducer

const store=createStore(counter);
const rootEL=document.getElementById('root');
const render=()=>ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={()=> store.dispatch({
        type:'INCREMENT'
    })}
    onDecrement={()=>store.dispatch({
        type:'DECREMENT'
    })}
    

    
    />,rootEL);
render();
store.subscribe(render);

// ReactDOM.render(<div >
//     {store.getState()}
//     </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
