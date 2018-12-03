import React,{Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';//国际化
moment.locale('zh-CN');

// Note? 展示单条笔记，状态
class Note extends Component {
  constructor(props){
    super(props);
  }
  state = {
    entity:this.props.entity,
    body:this.props.entity.body,
    update:this.props.entity.meta.update ||
    this.props.entity.meta.created,
    open:false
  }
  render(){
      const ts=moment(this.state.update)
      .fromNow();
    return(
      <div className="item">
      {this.state.body}{ts}
      </div>
    );
  }
}
export default Note;
