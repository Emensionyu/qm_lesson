import React, { Component } from 'react'
import control from './control'
class MyComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
      return <div>{this.props.message}
      {this.props.data}------
      {this.props.name}</div>
    }
  }
  
  export default control(MyComponent);


 
  