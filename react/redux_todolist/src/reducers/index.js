import { combineReducers}  from 'redux';
import { ADD,DELETE} from '../constants/todos'


const INITIAL_STATE={
    todos:[
        {id:0,text:"第一条todo"}
    ]
}
function todos(state=INITIAL_STATE,
    action){
        let todoNum=state.todos.length
        switch(action.type){
            case ADD:
            // 扔掉之前的状态 返回新的状态
            return{
                ...state,
                todos:state.todos.concat({
                    id:todoNum,
                    text:action.data
                })

            }
            case DELETE:
            console.log("reducer执行了")
            let newTodos=state.todos.filter(
                item=>{
                    return item.id!==action.id
                })
                // console.log("reducer执行了"+action.id)
                return{
                    ...state,
                    todos:newTodos
                }
            default:
            return state
        }

    }
    // todos();

// function users(state=OOOOO,action){

// }

// export default combineReducers({//多个reducer合并为一个
// 虽然一颗树状态不多不用redux combineReducers
//     todos
// });
export default combineReducers({
    todos

})
   
