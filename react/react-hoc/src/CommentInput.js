import React, { Component } from 'react'

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          content: ''
        }
      }
      handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
      }
      handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
      }
      handleSubmit(){
     
          if (this.props.onSubmit) {
            
            this.props.onSubmit({
              username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
            })
          }
          this.setState({ content: '' })
      }
      componentDidMount(){
        this.textarea.focus();
      }
      _saveUsername (username) {
        localStorage.setItem('username', username)
      }
    
      handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
      }
      componentWillMount () {
        this._loadUsername()
      }
    
      _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
      }
  render () {
    return (
      <div className='comment-input'>
       <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
                <input
                onBlur={this.handleUsernameBlur.bind(this)}
                value={this.state.username}
                onChange={this.handleUsernameChange.bind(this)} />
            </div>
        </div>
        <div className='comment-field'>
        <span className='comment-field-name'>评论内容：</span>
        <div className='comment-field-input'>
          <textarea
          ref={(textarea)=>this.textarea=textarea}
            value={this.state.content}
            onChange={this.handleContentChange.bind(this)} />
        </div>
      </div>
      <div className='comment-field-button'>
        <button
          onClick={this.handleSubmit.bind(this)}>
          发布
        </button>
      </div>
      </div>
    )
  }
}

export default CommentInput