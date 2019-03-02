import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
      }
      handleDD(index){
        if(this.props.onDD){
          this.props.onDD(index)
        }
      }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i}
          index={i}
          onD={this.handleDD.bind(this)} />
        )}
      </div>
    )
  }
}

export default CommentList