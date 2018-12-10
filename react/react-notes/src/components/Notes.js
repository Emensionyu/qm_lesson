import React, { Component } from 'react';
import Note from './Note';
import { db, loadCollection } from '../database'
// 支持离线的Web App  
class Notes extends Component {
  constructor(props) {
    super(props);
    this.getInitialData();
  }
  state = {
    entities: []
  }
  getInitialData () {
    loadCollection('notes')
      .then(collection => {
        // collection.insert([
        //   { body: 'hello ~' },
        //   { body: 'hola ~' }
        // ]);
        // db.saveDatabase();

        const entities = collection.chain()
        .find()
        .simplesort('$loki', 'isdesc')
        .data()

        this.setState({
          entities
        })

      })
  }
  render () {
    const entities = this.state.entities;
    const noteItems = entities.map(entity => 
      <Note
        key={ entity.$loki }
        entity={ entity }
        destroyEntity={this.destoryEntity}
        />
    )
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
        <div className="ui divided items">
          { noteItems }
          { !entities.length && 
            <span className="ui small disabled header">
            还没有笔记， 请按下“添加笔记”按钮。
            </span>
          }
        </div>

      </div>
    )
  }
  createEntity = () =>  {
    // console.log(this);
    loadCollection('notes')
      .then((collection) => {
        const entity = collection.insert({
          body: ''
        })
        db.saveDatabase();
        this.setState((prevState) => {
          const _entities = prevState.entities
          _entities.unshift(entity)
          return {
            entities: _entities
          }
        })
      })
  }
  destoryEntity = (entity) => {
    const _entities = this.state.entities.filter((_entity)=> {
      return  _entity.$loki != entity.$loki;
    });
    this.setState({
      entities: _entities
    })
    loadCollection('notes')
      .then(collection => {
        collection.remove(entity);
        db.saveDatabase();
      })
  }
}
export default Notes;
