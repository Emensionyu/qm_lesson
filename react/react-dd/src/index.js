import {state} from './redux/state.js'
import { storeChange} from './redux/storeChange.js'
import { createStore} from './redux/createStore'

const {store,dispatch}=createStore(state,storeChange);
function renderHead(state){
  const head =document.getElementById("head");
  head.innerText=state.text;
  head.style.color=state.color
}


function renderBody(state){
  const body =document.getElementById("body");
  body.innerText=state.text;
  body.style.color=state.color
}
function renderApp(store){
  renderHead(store.head);
  renderBody(store.body)
}

renderApp(store);
dispatch({type:"BODY_TEXT",text:"我是调用dispatch修改的text"});//并没有刷新 subscribe
console.log(store);
renderApp(store);



// 多（层次）组件 共享状态
// 写 规则 何时写 如何写dispatch 只是代写
// 区别 switch case 

// 组件只使用自己的状态，不需要redux
// head 会用body 在body 会用head
// function renderHead(state){
//   const head=document.getElementById('head');
//   head.innerText=state.head.text;
//   head.style.color=state.head.color; 
  // 隐患？getState 读是无所谓 修改状态的值， 只有 按规矩（action）办，
  // action对状态写 所有组件都 遵守的规范 dispatch --状态的安全性非常重要--
  // state.body.text="我是经过head修改后的body";
 
//   dispatch(state,{type:'BODY_TEXT',text:'我是head 经过diapatch修改后的body'})
// }
// function renderBody(state){
//   const head=document.getElementById('body');
//   head.innerText=state.body.text;
//   head.style.color=state.body.color; 
// }
// function renderApp(state){
//   renderHead(state)
//   renderBody(state)
// }
// //UI render
// renderApp(appState);
