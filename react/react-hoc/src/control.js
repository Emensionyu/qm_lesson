import React, { Component } from 'react'
export default (WrappedComponent)=> {
    return class Control extends React.Component {
      render(){
        // let props = {
        //     ...this.props,
        //     message: "You are under control"
        //   };
        if(!this.props.data) {
            return <div>loading...</div>
          }
        
        return <WrappedComponent  />
      }
    }
  }
  