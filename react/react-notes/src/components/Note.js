import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';//国际化
import Editor from './Editor';
import { db } from '../database';
import { loadCollection} from '../database';
moment.locale('zh-CN');//本地时间


// Note? 展示单条笔记，状态
class Note extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updated: this.props.entity.meta.update ||
      this.props.entity.meta.created,
    open: false,
    destoryEntity:
    this.props.destoryEntity//数据的准确性 向父亲走
  }
  update(){
    return moment(this.state.updated).fromNow();

  }
  header(){
    return _.truncate(this.state.body,
      {length:30})||'新建笔记'//将一个字符串的前面后面空格去掉
  }
  words(){
    return this.state.body.length;
  }
  toggle=()=>{
    this.setState((prevState)=>{
      console.log(prevState);
      return{
        open:!prevState.open
      }
    })
  }
  render() {
    const ts = moment(this.state.update)
      .fromNow();//计算距离现在过了多少时间 
    return (
      <div className="item">
        <div className="meta">
          {this.update()}
        </div>
        <div className="content">
        <div className="header" onClick={this.toggle}>
        {this.header()}
        </div>
          <div className="extra">
            {
              this.state.open&&
              <Editor entity={this.state.entity}
              updateEntity={this.updateEntity}
              
              />
            }
            {this.words() }字
            {this.state.open&&
            <i className="right floated trash outline icon" 
             onClick={()=>{this.state.destoryEntity(this.state.entity)}}></i>
            }
          </div>
        </div>

        {/* {this.state.body}{ts} */}
      </div>
    );
  }
  updateEntity = (event) => {
    const _body = event.target.value
    this.setState({
      body: _body
    })
    loadCollection('notes')
    .then((collection)=>{
      const entity=this.state.entity
      entity.body=_body
      collection.update(entity)
      db.saveDatabase();
    })
  }

}
export default Note;
