import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import Autof from './Autof';
class App extends Component {

    constructor () {
        super()
        this.state = {
          comments: []
        }
      }
      componentWillMount () {
        this._loadComments()
      }
    
      _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
      }
    
      _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
      }
    
      handleSubmitComment (comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComments(comments)
      }
      handlechange(text){
          this.setState({
              text
          })

      }
      handleDDD(index){
        const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)

      }
  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}
        onDD={this.handleDDD.bind(this)}
        />
        {this.state.text}
       
      </div>
    )
  }
}

export default App