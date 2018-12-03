import React,{Component } from 'react';
// 支持离线的Web App，只做记录
import Note from "./Note"
import {db,loadCollection} from '../database';
class Notes extends Component{
    constructor(props){
        super(props);
        this.getInitialData();//组件内的构造函数，实例化

    }
    state={
        entities:[]
    }
    getInitialData(){
        loadCollection('notes')
        .then(collection=>{
            // collection.insert([
            //     { body:'hello ~'},
            //     { body:'mensionyu'}
            // ]);
            // db.saveDatabase();
            const entities=collection
            .chain()//支持
            .find()//所有找到
            .simplesort('$loki','isdesc')//倒叙排序
            .data()//同步取得数据
            this.setState({
                entities
            })
        })
    }
    render(){
        const entities=this.state.entities;
        const noteItems=entities.map(entity=>
            <Note
                key={entity.$loki}
                entity={entity}
            
        
            />
            
            )
        return (
            <div className = "ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App_React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
        <div className="ui divided items">
          {noteItems}
        </div>
        </div>
      
           
        )
    }
    createEntity=()=>{
        console.log(this);
    }
}
export default Notes;