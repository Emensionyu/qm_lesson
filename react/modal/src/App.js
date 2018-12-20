import React, { Component } from 'react';
import Modal from './modal/modal';
import './App.css';

class App extends Component {
  state={
    visible:false
  }
  showModal=()=>{
    this.setState({
      visible:true
    })

  }
  render() {
    const {visible}=this.state
    return (
      <div className="App">
    <button onClick={this.showModal}>click here</button>
      <Modal 
      title="hahahahahahh"
      visible={visible}
     children=" 这里是自定义的content"
     onClose={this.closeModal}
     confirm={this.confirm}
      />
     </div>
    );
  }
  closeModal=()=>{
    console.log("通知父组件，关闭了")
  }
  confirm=()=>{
    console.log("通知父组件，点了 确定")
  }
}

export default App;
