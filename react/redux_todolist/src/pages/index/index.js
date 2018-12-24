import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.css'
import { add,del} from '../../actions/index';


class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      newTodo:''
    }

  }
  saveNewTodo(e){
    let {newTodo}=this.state
    if(!e.detail.value||e.detail.value===newTodo)return;
    this.setState({
      newTodo:e.detail.value 
    })
  }
  addTodo(){
    let {newTodo}=this.state;
    let {add}=this.props;
    if(!newTodo)return;
    console.log("哈哈哈哈")
    add(newTodo);
    this.setState({
      newTodo:""
    })
  }

  delTodo(id){
    let {del}=this.props;
    del(id);


  }
  render () {
    let { newTodo }=this.state;
    const { todos } = this.props;
    console.log(todos);
    const todosJsx = todos.map(todo => {
      return (
        <View className='todos_item' >
       
          <Text>{todo.text}</Text>
          <View className="del" onClick={this.delTodo.bind(this,todo.id)}>-</View>
        </View>
      )
    })
    return (
      <View className="index todos">
        <View className="add_wrap">
        <Input className="todos_item" value={newTodo} onBlur={this.saveNewTodo.bind(this)}/>
        <View className="add" onClick={this.addTodo.bind(this)}>+</View>
        </View>
        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}
// connext 两个参数 state action  返回新的组件 index拿到props
export default connect(({ todos }) => ({todos: todos.todos}), (dispatch) => ({
  add (data) {
    console.log("赫尔呵呵呵呵呵")//包装动作的的函数
    dispatch(add(data))//dispatch只能一个 action
    console.log(data+"--------")
    console.log("--------")
    //add 来自action----- {type:"ADD"}
  },
  del (id) {
    dispatch(del(id))
  }
}))(Index)



