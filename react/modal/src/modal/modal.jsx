import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
    }
  render () {
      const { visible }=this.state
      const { title ,children}=this.props;
      return visible&& 
           <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button 
            onClick={this.closeModal}
            className="modal-operator-close">取消</button>
            <button 
             onClick={this.confirm}
            className="modal-operator-confirm">确认</button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick}></div>
      </div>
    
  }
  closeModal=()=>{
      const { onClose}=this.props.onClose;
      onClose&&onClose();
    this.setState({
        visible:false
    })

  }
  confirm=()=>{
      const { confirm }=this.props;
      confirm&&confirm();
    this.setState({
        visible:false
    })
  }
  maskClick=()=>{

      this.setState({
          visible:false
      })
  }
  componentWillReceiveProps(props){
     console.log("mvvm 关注state  随时接受props的改变");
      this.setState({
        visible:this.props.visible
    });
  }
  componentDidMount(){
    console.log("mvvm 关注state  随时接受props的改变 mount");
    // this.setState({
    //     visible:this.props.visible
    // })

  }
 
}
export default Modal;
