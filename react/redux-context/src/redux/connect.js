import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (Comp,propTypes) => {
  class Connect extends Component {
      static contextTypes={
        store:PropTypes.object,
        dispatch:PropTypes.func,
        subscribe:PropTypes.func,
        getStore:PropTypes.func,
        ...propTypes

      }
      constructor(props){
          super(props);
        //   this.state={
        //     dispatch:()=>{}

        //   };
      }
      componentWillMount(){
          const { subscribe,dispatch}=this.context;
          this.setState({
              dispatch
          })
          this._upState();
          subscribe(()=>this._upState())

      }
      _upState(){
          const {getStore}=this.context;
          this.setState({
                ...getStore()
          })
          console.log(getStore+"_upstate");
      }
    render () {
      return (
        <div className="connect">
          <Comp {...this.state} /> 
        </div>
      )
    }
  }
  return Connect;
}
