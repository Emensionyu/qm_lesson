
//纯函数
const defaultState=0;
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.payload;
        case 'DDA':
            return state-action.payload;
        default:
            return state;
    }
  



}
const state=reducer(1,{type:'ADD'
,payload:2})
console.log(state)
