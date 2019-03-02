import React, { Component } from 'react'
// import DataCue from 'Data'
class Comment extends Component {
  // static propTypes={
    // comment:PropTypes
  // }
  constructor(){
    super()
    this.state={timeString: ''}
  }
  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  _updateTimeString(){
    const comment=this.props.comment
    const duration=(Date.now()-comment.createdTime)/1000
    // console.log(DataCue)
   
    console.log(Date.now())
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  handleDeleteComment(){
    if(this.props.onD)
    {
      this.props.onD(this.props.index)
    }
  }
  componentWillUnmount(){
    clearInterval(this._timer)
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        {this.state.timeString}
        <span className='comment-delete'
        onClick={this.handleDeleteComment.bind(this)}
        >
          删除
        </span>
      </div>
    )
  }
}

export default Comment