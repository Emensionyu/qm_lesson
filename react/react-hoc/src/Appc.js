import React, { Component } from 'react'
import MyComponent from './MyComponent';
class App extends Component {

    constructor () {
        super()
        this.state = {
         data:'true',
         content:'<h1>React.js</h1>'

        }
      }
     
  render() {
    return (
      <div>
       {/* <MyComponent 
       name="mensionyu"
       data={this.state.data} /> */}
         <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} 
        style={{fontSize:'19px'}}/>
      </div>
    )
  }
}

export default App