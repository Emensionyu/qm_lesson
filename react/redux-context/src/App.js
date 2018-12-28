import React, { Component } from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import { createStore,storeChange } from './redux';

import PropTypes from 'prop-types';
//在 组件中static 一定要给传参 
export default class App extends Component {
    //这个属性的值，在内部打破层次 拿到在顶级组件中共享的状态
    static childContextTypes={
        store: PropTypes.object, 
        dispatch: PropTypes.func,
        subscribe: PropTypes.func, 
        getStore: PropTypes.func           
    }
    getChildContext(){
        const state={
            head:"我是全局head",
            body:"我是全局body",
            headBtn:"修改 head",
            bodyBtn:"修改 body"
        }
        const { store,dispatch,subscribe,getStore}=createStore(state,storeChange);
        return {store,dispatch,subscribe,getStore}
    }
  render () {
      return(
        <div className="App">
        <Head/>
        <Body/>
      </div>

      )
    
  }
}
