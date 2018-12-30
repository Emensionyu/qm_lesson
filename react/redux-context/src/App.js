import React, { Component } from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import { createStore,storeChange } from './redux';

import PropTypes from 'prop-types';
//在 组件中static 一定要给传参 
export default class App extends Component {
    //这个属性的值，在内部打破层次 拿到在顶级组件中共享的状态
    
   
  render () {
      return(
        <div className="App">
        <Head/>
        <Body/>
      </div>

      )
    
  }
}
